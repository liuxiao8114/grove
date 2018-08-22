describe('es5 features', () => {
  describe('closure', () => {
    it('test closure for private var', () => {
      function counter(count) {
        return {
          count() { return ++count },
          reset() { return count = 0 }
        }
      }
      const COUNTER_1 = counter(0)
      const COUNTER_2 = counter(0)

      let count = 0 // this won't be used for closure

      expect(COUNTER_1.count()).toEqual(1)
      expect(COUNTER_2.count()).toEqual(1)

      COUNTER_1.count()
      COUNTER_1.count()
      COUNTER_1.count()

      expect(COUNTER_1.count()).toEqual(5)
      expect(COUNTER_1.reset()).toEqual(0)
    })

    //js高级设计7.2.1例
    it('test closure in 7.2.1', () => {
      function createFunctionsInit() {
        var result = new Array()

        for(var i = 0; i < 10; i++)
          result[i] = function() { return i }
        return result
      }

      function createFunctionsDeal() {
        var result = new Array()

        for(var i = 0; i < 10; i++)
          result[i] = (function(num) { return num })(i)

        return result
      }

      function createFunctionsReDeal() {
        var result = new Array()

        for(var i = 0; i < 10; i++) {
          result[i] = (function(num) {
            return function() { return num }
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
      const LOCAL_SCOPE = 'LOCAL_SCOPE',
            SUPER_SCOPE = 'SUPER_SCOPE',
            NULL = 'NULL'

      function checkScope() {
        var scope = LOCAL_SCOPE
        function f() { return scope }
        return f
      }

      const superScope = {
        scope: SUPER_SCOPE,
        checkScope() {
          function f() { return this.scope || NULL }
          return f
        }
      }

      expect(checkScope()()).toEqual(LOCAL_SCOPE)
      expect(superScope.checkScope().call(checkScope)).toEqual(NULL)
      expect(superScope.checkScope().call(superScope)).toEqual(SUPER_SCOPE)
      // expect(superScope.checkScope()()).toEqual(NULL) // this is undefined in jest context ?
    })

    it('test closure in 8.6-e8.4', () => {
      function addPrivateProperty(o, name, predicate) {
        let value, reName = name.charAt(0).toUpperCase() + name.slice(1)

        o['set'+ reName] = setting => {
          if(predicate && !predicate(setting))
            throw Error('cannot fit predication')
          else
            value = setting
        }
        o['get' + reName] = () => value
        return o
      }

      function birthCheck(b) {
        if(typeof b !== 'string') b = b.toString()
        const year = Number(b.slice(0, 4))
        return year > 1900 && year <= 2018
      }

      let o = {}

      addPrivateProperty(o, 'birth', birthCheck)
      expect(typeof o.setBirth).toBe('function')
      o.setBirth(2000)
      expect(o.getBirth()).toBe(2000)
    })
  })

  describe('Array', () => {
    it('reduceRight', () => {
      const fn1 = first => 'first is: ' + first,
            fn2 = second => 'second is: ' + second,
            fn3 = last => 'last is: ' + last

      const funcs = [fn1, fn2, fn3],
            last = funcs[funcs.length - 1],
            rest = funcs.slice(0, -1)

      expect(rest.reduceRight((composed, f) => f(composed),last('last')))
      .toEqual('first is: second is: last is: last')
      expect(funcs.reduce((prev, cur) => (...args) => prev(cur(...args)))('last'))
      .toEqual('first is: second is: last is: last')
    })
  })

  describe('Object', () => {
    //js高设 22.1.4
    it('test closure using bind', () => {
      const DONE = 'DONE',
            CLICK_EVENT = 'onClick'

      let addEventUtil = {
        events: {}, //{ type: handler }
        addEvent(e, fn) { this.events[e] = fn },
        emit(e, ...args) {
          try {
            return this.events[e](args)
          } catch(ex) {
            throw new Error(`no this event: ${e}`)
          }
        }
      }

      Function.prototype.myBind = function(context) {
        return args => this.apply(context, args)
      }

      let handler = {
        message: '',
        handleClick(e) { return e.value }
      }

      addEventUtil.addEvent(CLICK_EVENT, handler.handleClick.myBind(handler))
      expect(addEventUtil.emit(CLICK_EVENT, { value: DONE })).toEqual(DONE)
    })
  })
})
