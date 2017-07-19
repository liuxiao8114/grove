###[redux]
1. redux-thunk的两个问题

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
  if(action[CALL_API])
}
```


2. 为什么异步处理一定是function类型的action?

3.
###[react]

###[css]
测试时对样式的忽略处理:
https://stackoverflow.com/questions/32236443/mocha-testing-failed-due-to-css-in-webpack
https://stackoverflow.com/questions/32683440/handle-webpack-css-imports-when-testing-with-mocha/32848647#32848647

###[grove]


###[tools]
自动测试工具 nightwatch
