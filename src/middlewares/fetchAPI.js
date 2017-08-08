import { normalize, schema } from 'normalizr'
//import fetch from 'node-fetch'

const userSchema = new schema.Entity('user', {}, {
  idAttribute: user => user.login.toLocaleLowerCase()
})

const repoSchema = new schema.Entity('repo', {
  owner: userSchema
}, {
  idAttribute: repo => repo.full_name.toLocaleLowerCase()
})

export const Schemas = {
  USER: userSchema,
  REPO: repoSchema,
  REPO_SEARCH_RESULTS: {
    items: [repoSchema]
  }
}

export const FETCH_API = 'FETCH_API'

const getNextUrl = response => {
  /*
  Link: <https://api.github.com/user/repos?page=3&per_page=100>; rel="next",
        <https://api.github.com/user/repos?page=50&per_page=100>; rel="last"
  */
  const link = response.header && response.header.get('link')
  if(!link) {
    return null
  }

  const nextLink = link.split(',').find('rel="next"')
  if(!nextLink) {
    return null
  }

  // https://api.github.com/user/repos?page=3&per_page=100
  // https://api.github.com/search/repositories?q=redux-thunk
  return nextLink.split(';')[0].slice(1, -1)
}

//fetch data and normalize
const callApi = (endpoint, schema) => {
  const API_ROOT = 'https://api.github.com/'
  const fullUrl = endpoint.includes(API_ROOT) ? endpoint : (API_ROOT + endpoint)

  return fetch(fullUrl).then(response =>
    response.json().then(json => {
      if(!response.ok) {
        return Promise.reject()
      }

      const nextPageUrl = getNextUrl(response)
      /*{
        entities: {

        },
        result: {

        },
        nextPageUrl: ''
      }*/
      return Object.assign({},
        normalize(json, schema),
        { nextPageUrl }
      )
    })
  )
}

export default store => next => action => {
  const fetchAPI = action[FETCH_API]
  if(!fetchAPI) {
    return next(action)
  }
  const { schema, types } = fetchAPI
  let { endpoint } = fetchAPI

  if(!(types instanceof Array)) {
    throw new Error(`types must be Array but got: "${types.prototype}"`)
  }

  if(types.length !== 3) {
    throw new Error(`in FETCH_API there must have 3 types but now got: ${types.length}`)
  }

  if(typeof endpoint == 'function') {
    endpoint = endpoint(store.getState())
  }

  const [ requestType, successType, failureType ] = types
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[FETCH_API]
    return finalAction
  }

  next(actionWith({ type: requestType }))
  return callApi(endpoint, schema).then(response => next(actionWith({
    type: successType,
    response
  }))).catch(error => next(actionWith({
    type: failureType,
    error: error || 'Something bad happened'
  })))
}
