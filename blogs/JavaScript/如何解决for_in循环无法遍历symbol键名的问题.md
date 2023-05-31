---
title: 如何解决for_in循环无法遍历symbol键名的问题
date: 2020-4-2
tags:
 - ES6
 - JavaScript
categories:
 - JavaScript
---



## 解决方案

### getOwnPropertySymbols

Object.getOwnPropertySymbols() 只会返回对象中 `Symbol` 类型的属性名

```js
const obj = {
  name:"Jade",
  nation:"China",
  [Symbol('address')]: 'XXX'
}

const objectSymbols = Object.getOwnPropertySymbols(obj) // [Symbol('address')]
```



### Reflect.ownKeys

`Reflect.ownKeys()` 方法会返回所有类型的属性名，包括常规属性名和 `Symbol` 属性名

```js
Reflect.ownKeys(obj) // ["name", "nation", Symbol(foo)]
```



## 解析

for...in 循环对象会访问原型链上所有对象属性

```js
const obj = {
  name:"Jade",
  nation:"China",
  [Symbol('address')]: 'XXX'
}
const objNames = []
Object.prototype.other = 'other'

for(let key in obj) {
  objNames.push(key) // ["name", "nation", "other"]
}
```

这里原型链上的 **other** 属性也被遍历出来了

那么，想要至遍历指定对象中的自有属性，这是就需要借助 **hasOwnProperty()** 方法，该方法传入属性名，检测对象自身是否具有指定的属性名，有则返回 true，否则返回 false

```js
for(let key in obj) {
  if(obj.hasOwnProperty(key)) {
    objNames.push(key) // ["name", "nation"]
  }
}
```

现在，就把 **other** 过滤掉了



::: details

除了 `for...in` ，还有 `for...of` / `Object.keys()` / `Object.getOwnPropertyNames()` 不能遍历到 `Symbol` 定义的属性，`JSON.stringify` 也不会返回

:::