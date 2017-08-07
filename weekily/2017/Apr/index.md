[js]
1. js中创建对象
1) 工厂方法

```js

```
2) 构造函数

3) 原型对象
每个函数有prototype的属性,指向该函数的原型对象。
原型对象默认包含unenumable的constructor属性，其余属性,都是根据原型链从Object继承而来
```js
var F = function() {}
var p = F.prototype
var c = p.constructor
c === F //true

var o = new F()
o.constructor = F //true

```
constructor默认包含一个指向?
constructor默认是在原型对象中的(p166-创建了自定义的构造函数之后，其原型对象默认只会取得constructor 属性)

http://www.cnblogs.com/xiaohuochai/p/5721552.html
```js
function Person() {

}

Person.prototype = {
  name: '',
  age: 16,
  getName: () => {
    return this.name
  }
}
```
4) 组合式

5) 寄生
