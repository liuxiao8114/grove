/*
usage1:
const routes = [
  {
    path: '/hello/:username',
    action: (context) => `Welcome, ${context.parms.username}!`
  }
];

resolve(routes, {path: '/hello/john'})
  .then(result => console.log(result));

usage2:

const routes = {
  path: '/',
  children: [
    home,login
  ],
  async action(){

  },
};

resolve(routes, {
  path: '',
  context: '',
  render: render()
});
*/

import matchRoute from './matchRoute';

async function resolve(routes, pathOrContext){
  let done = false;
  let value;
  let result;

  const context = typeof pathOrContext === 'string'
    ? {path: pathOrContext}
    : pathOrContext;
  const root = Array.isArray(routes)
    ? {path: '/', children: routes} : routes;

  const match = matchRoute(root, '', context.path);
  async function next(){
    ({ value, done } = match.next());

    if(value && !done){
      const newContext = Object.assign({}, context, value);

      if(value.route.action){
        return await value.route.action(newContext, newContext.params);
      }
    }
  }

  while(!done && value){
    await next(value);
  }

  return result;
}

export default resolve;
