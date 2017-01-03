/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import 'babel-polyfill';
import { expect } from 'chai';
import toRegExp from 'path-to-regexp';
import fs from 'fs';

const fileUrl1 = '../testFile1.md'

describe('Promise feature', () => {
  it('test then', done => {
    const fetchFile = filename => new Promise(resolve => {
        fs.readFile(filename, (err, data) => resolve(data))
      })

    const result = fetchFile(fileUrl1).then(() => 'promise done!')
    result.then(fin => {
      console.log(fin)
      done()
    })
  })

  it('test return then', done => {
    const fetchFile = filename => {
      const promise = new Promise(resolve => {
        fs.readFile(filename, (err, data) => resolve(data))
      })
      return promise.then(() => 'promise done!')
    }

    const result = fetchFile(fileUrl1)
    result.then(fin => {
      console.log(fin)
      done()
    })
  })
})

describe('async', () => {

  it('auto-promise', () => {
    function readFile(filename){
      return new Promise((resolve) => {
        fs.readFile(filename, (err, data) => {
          resolve(data);
        });
      });
    }

    function* fooGenPromise(){
      const file1 = yield readFile('../testFile1.md');
      const file2 = yield readFile('../testFile2.md');
      console.log(file1.toString());
      return file2.toString();
    }

    /* For manual take action with generator
    const g = fooGenPromise();
    g.next().value.then((data) => {
      g.next(data).value.then((data) => {
        return data;
      });
    });

    g.next().value.then((data) => {
      return g.next(data).value;
    }).then((data) => {
      console.log(g.next(data));
    });
    */

    function runPromise(fn){
      const gen = fn();

      function next(result){
        // result = gen.next(result);
        if(result.done){
          return result.value;
        }

        result.value.then((data) => {
          next(gen.next(data));
        });
      }
      let result = gen.next();
      next(result);
    }

    Promise.resolve(runPromise(fooGenPromise)).then(data => {
      expect(data).equal('This is testFile2;');
    });
  });

  it('generator ', () => {
    const fooPromise = new Promise((resolve) => {
      let x = 10;
      resolve(x);
    });

    fooPromise.then((data) => {
      console.log('Promise: ' + data);
      return Promise.resolve(data + 2).then((data2) => {
        console.log(data + data2);
      });
    });

    const fooGenThunk = function* (){
      let x = 10;
      let y;
      y = yield (cb) => {
        cb(x + 2);
      };
      return x + y;
    };

    function run(fn){
      const gen = fn();
      function next(data){
        let result = gen.next(data);

        /*
        if(!result.done){
          next(result.value);
        }
        */
        if(result.done) {
          console.log('value: ' + result.value);
          return;
        }
        result.value(next);
      }
      next();
    }
    run(fooGenThunk);
  });

  it('co',() => {
    function co(gen){
      const ctx = this;
      return new Promise(resolve => {
        let g;
        if(typeof gen === 'function'){
          g = gen.call(ctx);
        }
        if(!g ||typeof g.next !== 'function'){
          return resolve(g);
        }

        onFulfilled();

        function onFulfilled(res){
          let ret;
          try {
            ret = g.next(res);
          } catch (e){
            return null;
          }
          next(ret);
        }

        function next(ret){
          if(ret.done) return ret.value; // return
          ret = ret.value;
          ret = Promise.resolve(ret);
          return ret.then();
          // if()
        }

      });
    }

    function readFile(){

    }

    function* foo(){
      const file1 = yield readFile();
      const file2 = yield readFile();
      return file1.toString();
    }
    co(foo);
  });
});


/* eslint-enable no-console*/
/* eslint-enable no-unused-expressions*/
