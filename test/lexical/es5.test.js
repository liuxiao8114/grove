/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import cp from 'child_process';
import expect from 'expect';

const RUNNING_REGEXP = /The server is running at http:\/\/(.*?)\//;
let server;
const serverPath = '';

function runServer(cb) {
  function onStdOut(data) {
    const match = data.toString('utf8').match(RUNNING_REGEXP);
    process.stdout.write(data);

    if(match){
      server.stdout.removeListener();
    }
  }

  server = cp.spawn('node', [serverPath], {
    env: Object.assign({ NODE_ENV: 'development' }, process.env),
    silent: false
  });

  server.stdout.on('data', onStdOut);
  return server;
}

export default runServer;

describe('es5 feature', () => {
  it('test reduceRight', () => {
    const fn1 = first => 'first is: ' + first
    const fn2 = second => 'second is: ' + second
    const fn3 = last => 'last is: ' + last

    const funcs = [fn1, fn2, fn3]
    const last = funcs[funcs.length - 1]
    const rest = funcs.slice(0, -1)
    expect(rest.reduceRight((composed, f) => {
      let done = f(composed)
      return done
    }, last('last'))).toEqual('first is: second is: last is: last')
  })

  it('test closure for private var', () => {
    function counter(count) {
      return {
        count() { return ++count },
        reset() {
          count = 0
        }
      }
    }
    expect(counter(1).count()).toEqual(2)
    expect(counter(10).count()).toEqual(11)
  })

  //js高级设计7.2.1例
  it('test closure in 7.2.1', () => {
    function createFunctionsInit() {
      var result = new Array()

      for(var i = 0; i < 10; i++) {
        result[i] = function() {
          return i
        }
      }
      return result
    }

    function createFunctionsDeal() {
      var result = new Array()

      for(var i = 0; i < 10; i++) {
        result[i] = (function(num) {
          return num
        })(i)
      }
      return result
    }

    function createFunctionsReDeal() {
      var result = new Array()

      for(var i = 0; i < 10; i++) {
        result[i] = (function(num) {
          return function() {
            return num
          }
        })(i)
      }
      return result
    }

    expect(createFunctionsInit()[5]()).toEqual(10)
    expect(createFunctionsDeal()[5]).toEqual(5)
    expect(createFunctionsReDeal()[5]()).toEqual(5)
  })

  //js权威指南8.6例
  it('test closure in 8.6', () => {
    var scope = 'global scope'
    function checkscope() {
      var scope = 'local scope'
      function f() { return scope }
      return f
    }

    function checkscope2() {
      var scope = 'local scope'
      function f() { return this.scope }
      return f
    }
    expect(checkscope()()).toEqual('local scope')
    expect(checkscope2()()).toEqual(scope)
  })

  //js高设 22.1.4
  it('test closure using bind', () => {
    let addEventUtil = {}

    Function.prototype.bind = context => {
      const self = this;
      return args => {
        return self.apply(context, args)
      }
    }

    let handler = {
      message: '',
      handleClick(event) {
        alert(this.message)
      }
    }

    addEventUtil.addEvent(handler.handleClick.bind(handler))

  })

  /*

  */

  it('test fp', () => {
    let fn = n => {
      let a = [];
      if(typeof n !== 'number' || n > 31) {
        return
      }

      function iter(count, ret) {
        if(count === 0) return ret
        let j = Math.floor(Math.random() * 30 + 2)
        console.log("j : " + j)
        if(ret.indexOf(j) !== -1) return iter(count, ret)
        ret[count-1] = j
        console.log("ret : " + ret)
        return iter(--count, ret)
      }

      return iter(n, a)
    }
    console.log(fn(3))
//    console.log(b[0] + " , " + b[1] + " , " + b[2])
  })


})
