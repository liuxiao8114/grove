[js]
1. js中创建对象
1) 工厂方法

```js

```
2) 构造函数

3) 原型对象
每个函数有prototype的属性,指向该函数的原型对象。
原型对象默认包含unenumable的constructor属性，
其余属性,都是根据原型链从Object继承而来
constructor默认包含一个指向?
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
