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
    expect(rest.reduceRight((composed, f) => f(composed),last('last')))
    .toEqual('first is: second is: last is: last')
    expect(funcs.reduce((prev, cur) => (...args) => prev(cur(...args)))('last'))
    .toEqual('first is: second is: last is: last')
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

    var o = {
      scope: scope
    }

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
    expect(checkscope2().call(checkscope)).toEqual(undefined)
    expect(checkscope2().call(o)).toEqual(scope)
//    console.log('what is this: ' + this) // why 'this' is undefined?
  })

  it('test closure in 8.6-e8.4', () => {
    function addPrivateProperty(o, name, predicate) {
      let value, reName = name.charAt(0).toUpperCase() + name.slice(1)

      o['set'+ reName] = setting => {
        if(predicate && !predicate(setting))
          throw Error()
        else
          value = setting
      }
      o['get' + reName] = () => value
    }
  })

  //js高设 22.1.4
  it('test closure using bind', () => {
    const TEST_RESULT = 'emit done'
    let addEventUtil = {
      events: {}, //{ type: handler }
      addEvent(e, fn) {
        this.events.e = fn
      },
      emit(e, ...args) {
        try {
          return this.events.e(args)
        } catch(ex) {
          throw new Error('no this event')
        }
      }
    }

    Function.prototype.myBind = function(context) {
      const self = this;
      return args => {
        return self.apply(context, args)
      }
    }

    let handler = {
      message: '',
      handleClick(event) {
        return TEST_RESULT
      }
    }

    addEventUtil.addEvent('onClick', handler.handleClick.myBind(handler))
    expect(addEventUtil.emit('onClick')).toEqual(TEST_RESULT)

  })

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
    function array(a, n) { return Array.prototype.slice.call(a, n || 0) }
    function partialLeft(f) {
      var args = arguments
      return function() {
        var a = array(args, 1)
        a = a.concat(array(arguments))
        return f.apply(this, a)
      }
    }

    function partialRight(f) {
      var args = arguments
      return function() {
        var a = array(arguments)
        a = a.concat(array(args, 1))
        return f.apply(this, a)
      }
    }

    function partial(f) {
      var args = arguments
      return function() {
        var a = array(args, 1)
        var i = 0 , j = 0
        for(; i < a.length; i++) {
          if(a[i] === undefined) a[i] = arguments[j++]
        }
        a = a.concat(array(arguments, j))
        return f.apply(this, a)
      }
    }
    var f = function(x, y, z) { return x * ( y - z) }
    partialLeft(f, 2)(3, 4)
    partialRight(f, 2)(3, 4)
    partial(f, undefined, 2)(3, 4)
//    console.log(b[0] + " , " + b[1] + " , " + b[2])
  })

  it('test custom map and reduce', () => {

    function map(arr, callback, args) {
      let ret = [], value = null;
      if(typeof arr === Array) {
        for(let i = 0; i < arr.length; i++ ) {
          value = callback(arr[i], args)
          if(value) ret.push(value)
        }
        return ret
      } else {
        for(let i in arr) {
          value = callback(arr[i], args)
          if(value) ret.push(value)
        }
      }

      return ret

    }

    // items.map(fn)
    Array.prototype.myMap = function(fn) {
      let ret = []
      for(let i = 0; i < this.length; i++) {
        ret.push(fn.call(null, this[i]))
      }
      return ret
    }

    // args.reduce(() => {}, 1)
    function reduce(o, fn, init) {
      var prev = init || o[0],
      cur = init ? o[1] : o[0]

      return index => {
        var ret = fn(prev, cur, index)
        if(ret) return reduce(o.slice(1), fn, ret)
        return ret
      }
    }

    expect([1, 3, 5].myMap(i => (i + 1))[0]).toEqual(2)
  })

  it('test this', () => {
    var app = {} // while it occurs error with cannot assign to read only property when var app = function(){}
    app.login = function() {
      this.name = 'xiao'
      this.pass = '3385'
    }

    app.login()

    function Emitter() {
      Emitter.init.call(this)
    }

    Emitter.init = function() {
      this.name = 'xiao'
      this.pass = '3385'
    }

    let e = new Emitter()

    expect(app.name).toEqual('xiao')
    expect(e.name).toEqual('xiao')
  })
})
