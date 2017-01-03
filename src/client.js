import React from 'react'
import { render } from 'react-dom'
import Modal from './component/modal/Modal'

/*
1.点击按钮，触发弹窗
2.弹窗逻辑
3.事件绑定
*/
function run(){
  const container = document.getElementById('app');
  const div = document.createElement('div');
  div.id = 'createdDiv';
  div.text = 'Hello World';

  document.body.appendChild(div);

  var element = document.createElement("div");
  element.className = "message";
  var textNode = document.createTextNode("Hello world!");
  element.appendChild(textNode);
  document.body.appendChild(element);
  console.log('The client is run!');  //eslint-disable-line
}

if(['loaded', 'interactive', 'complete'].includes(document.readyState) && document.body){
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
