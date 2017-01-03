## 5/13
``` js
  module.exports = {
    module: {
      externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'  
      }
    }
  }

```
You might be wondering about that externals field. We want to avoid bundling all of React into the same file, since this increases compilation time and browsers will typically be able to cache a library if it doesn't change.

Ideally, we'd just import the React module from within the browser, but most browsers still don't quite support modules yet. Instead libraries have traditionally made themselves available using a single global variable like jQuery or .This is called the "namespace pattern", and webpack allows us to continue leveraging libraries written that way. With our entry for "react": "React", webpack will work its magic to make any import of "react" load from the React variable.

### From Webpack Doc

externals

Specify dependencies that shouldn’t be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on output.libraryTarget.


### 5/30

1. Promise
  + then的参数：
  ```js
  var promise = new Promise((resolve, reject) => {
    resolve(1);
  });
  promise.then(data => console.log(data + 1)) // 2
  .then(data => console.log(data));           // 2
  ```
  then的参数来源于promise对象内部调用relove函数时的参数，即调用resolve方法时，表示异步完成设置状态，同时指定回调的参数
  + Promise 与Generator的结合
2. async
