/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */
import 'babel-polyfill';
import { expect } from 'chai';
import toRegExp from 'path-to-regexp';
import fs from 'fs';

const cache = new Map();

describe('ES5', () => {
  it('bind', () => {
    function foo(end, routePath, urlPath) {
      const key = `${routePath}|${end}`;
      let regexp = cache.get(key);

      if(!regexp){
        const keys = [];
        regexp = {pattern: toRegExp(routePath, keys, { end }), keys};
        cache.set(key, regexp);
      }

      /*
      if(!regexp){
        const keys = [];
        regexp = { pattern: toRegExp(routePath, keys, { end }), keys};
      }
      console.log(key);
      console.log(regexp);
      console.log(keys);
      */
      const m = regexp.pattern.exec(urlPath);
      if(!m){
        return undefined;
      }
    }

    const matchPath = foo.bind(undefined, true);
//  const matchBasePath = foo.bind(undefined, false);
    expect(matchPath('/foo/:bar','/foo/bar')).to.equal('route : OK');
  });
});

describe('async', () => {
  it('promise then', () => {
    let result;
    const promise = Promise.resolve(() => {
      console.log('new Promise');
    });
    promise.then(() => {
      console.log('new Promise1');
      return {name: 'liu'};
    })
    .then((data) => {
      console.log('new Promise2');
      result = data.name;
    })
    .then(() => {
      console.log('new Promise3');
      expect(result).to.equal('liu');
    });

  });

  it('Thunk', () => {
    function foo(name, age, cb){
      cb(name, age);
    }

//  Thunk(foo)('xiao', 30)(() => {});
    function Thunk(fn){
      const ctx = this;
      return function () {
        const args = new Array();
        for(let i = 0; i < arguments.length; i++){
          args[i] = arguments[i];
        }
        return function (callback) {
          args.push(callback);
          console.log(args);
          fn.apply(ctx, args);
        };
      };
    }

    function ThunkEs6(fn){
      return function(...args){
        return function(callback){
          fn.call(null, ...args, callback);
        }
      }
    }

    let result;
    ThunkEs6(foo)('xiao', 30)((name, age) => { result = name + ' : ' + age});
    expect(result).equal('xiao : 30');
  });

  it('Thunkify', () => {
    /*
    var thunkify = require('thunkify');
    var fs = require('fs');

    var read = thunkify(fs.readFile);
    read('package.json')(function(err, str){

    });
    */
    function Thunkify(fn){
      return function(){
        var args;
        return function(done){
          let called;
          args.push(function(...args){

            if(called){
              return;
            }

            done.call(null, ...args);
            called = true;
          });

        }
      };
    }
  });
});

/* eslint-enable no-console*/
/* eslint-enable no-unused-expressions*/
