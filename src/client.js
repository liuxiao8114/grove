import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Foo from './containers/Root'

//import ThinkReact from './components/app/ThinkReact'
//import App from './components/app/App'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

function run() {
  console.log('The client is run!');  //eslint-disable-line
  render(<Foo store={store} history={history}/>, document.getElementById('app')) //Error!
  /*
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
    render(<ThinkReact products={PRODUCTS}/>, document.getElementById('app'))
  */
}

if(['loaded', 'interactive', 'complete'].includes(document.readyState) && document.body){
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
