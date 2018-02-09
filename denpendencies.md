cnpm uninstall react react-dom
cnpm uninstall babel-core babel-cli babel-loader babel-eslint babel-register babel-runtime
cnpm uninstall normalizr
cnpm uninstall node-sass

cnpm install --save redux redux-thunk react-redux react-router-redux
cnpm install --save redux-logger

cnpm i --save react react-dom
cnpm install --save-dev babel-core babel-preset-react
cnpm install --save-dev babel-preset-env babel-loader babel-polyfill babel-eslint babel-register babel-cli
cnpm i --save-dev enzyme jsdom
cnpm i --save-dev react-test-renderer

cnpm install --save-dev redux-devtools
cnpm install --save-dev redux-devtools-log-monitor
npm install --save-dev redux-devtools-dock-monitor@1.2.0

cnpm install --save normalizr

cnpm install --save-dev mocha chai expect sinon

//fix unit test to ignore scss
cnpm install --save-dev ignore-styles

//fix object rest-spread compile(need to add plugin in .babelrc)
cnpm install --save-dev babel-plugin-transform-object-rest-spread

//react >=15.5 extracted the built-in prop types to a separate package
cnpm install prop-types --save

cnpm install --save-dev redux-mock-store
cnpm install --save-dev nock

//for middleware test
cnpm install node-fetch --save-dev

//for promise test in mocha
cnpm install chai-as-promised --save-dev


"test": "mocha \"srcTest/**/*.test.js\" --compilers js:babel-register --require ignore-styles"
"test": "mocha \"src/lexical/es6.test.js\" --compilers js:babel-register --require ignore-styles"
