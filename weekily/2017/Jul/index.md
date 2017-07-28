###[redux]
1. 7/3 redux-thunk的几个问题
Q: 为什么处理函数类型的action时,用的是原始的dispatch(而不是其他middleware处理后的nextDispatch)?
```js
function createThunk() {
  return ({ dispatch, getState }) => next => action => {
    if(typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
}
```
A: 因为thunk要对action进行直接的处理(传参调用function类型的action,或者用next调用一般的action),
这个过程是一个原子过程(你不可能对action的内部添加逻辑),所以理应是最后一步。其他的诸如输出log的middleware都是在其外围的处理。
所以这个middleware一定是要最先处理的。
Q: 那么为什么这里面的传参还是包含next?

A:先看一下applyMiddleware.js的逻辑是怎么玩的：
```js
let chain = []
const middlewareAPI = {
  getState: store.getState(),
  dispatch: action => dispatch(action)
}

chain = middlewares.map(middleware => middleware(middlewareAPI))
dispatch = composes(chain)(store.dispatch)

return {
  ...store,
  dispatch
}
```
createThunk返回的第一层函数,传参middelwareAPI
第二层参数,也就是composes内部调用的reduce方法的初始值参数，是store.dispatch
然后这一层的返回值(即thunk的返回值)，作为下一个middleware的参数(即下一个middleware的实参next)
这样，当接下来的middleware调用next方法时，就会包含之前middleware处理过的逻辑.
而所有的middleware处理过后，不过是返回一个函数对象,等待接收我们搞出来的action...

所以在thunk里为什么包含next? --其实这里的next,就是原始的store.dispatch

```js
//actions.js
const fetchUser = login => ({
  [CALL_API]: {
    types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
    endpoint: `/users/${login}`,
    schema: userSchema
  }
})

//middleware api
const api = ({ dispatch, getState }) => next => action => {
  if(!action[CALL_API]) {
    next(action)
  }


}
```

Q: 为什么异步处理一定是function类型的action?
A: 异步处理本身就是一个被封装,调用的过程(setTimeout，promise)
而通常dispatch需要的是一个明确的对象,传递给reducer
异步处理中一定会包含dispatch的逻辑,所以在中间层的处理时,一定是像这样
```js
const handleAsyncActions = dispatch => action => {
  const [ requestType, successType, failureType ] = action.types
  return fetch(`https://api.github.com`).then(
    response => response.json().then(json => {
      if(!response.ok) return null
      return json
    })
  ).then(ret => {
    dispatch({
      type: successType,
      ret
    })
  }).catch(err => {
    dispatch({
      type: failureType,
      err
    })
  })
}

const showNotification = dispatch => text => {
  let notiID = 1
  setTimeout(() => {
    dispatchShowNotification(notiID++, text)
  }, 1000)
}
```
这样写会有什么问题?
如果这东西在所有的action中只出现一次, and 没有其他的action会更新这个action type的话 -> 可以！
反之：
1) 但凡想要在其他component中写show/hide notification的话，你都需要手写一个setTimeout...
2) 如果有其他异步的action也在更新同样的actionType,就会产生race condition的问题
3.
###[react]

###[css]
测试时对样式的忽略处理:
https://stackoverflow.com/questions/32236443/mocha-testing-failed-due-to-css-in-webpack
https://stackoverflow.com/questions/32683440/handle-webpack-css-imports-when-testing-with-mocha/32848647#32848647

###[grove]


###[tools]
自动测试工具 nightwatch
