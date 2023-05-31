---
title: Symbol.for与Symbol.keyFor
date: 2020-4-2
tags:
 - ES6
 - JavaScript
categories:
 - JavaScript
---



## Symbol.for()

和 `Symbol()` 不同的是，用 `Symbol.for()` 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。`Symbol.for() 并不是每次都会创建一个新的 symbol`，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则，它会再新建一个。

**避免了重复创建相同 key 的 symbol**



::: details

**什么是全局 symbol 注册表？**

JavaScript 维护了一个全局的 `Symbol` 注册表，通过向注册表中插入 `Symbol` 对象，并为对象起一个字符串名称访问该对象

向注册表插入或者读取 `Symbol` 对象需要使用 `Symbol.for(key)` 方法，如果注册表中有名为 `key` 的对象，就返回该对象，否则就插入新对象再返回

这里需要注意的是，使用 `Symbol()` 方法创建的属性名**不会插入到注册表中**

:::



```js
const sf1 = Symbol.for("foo") // 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
const sf2 = Symbol.for("foo") // 从 symbol 注册表中读取键为"foo"的 symbol，而不是重新创建一个新的 symbol
const s1 = Symbol('bar')
const s2 = Symbol('bar')

sf1 === sf2 // true，证明了上面说的
s1 === s2 // false，Symbol() 函数每次都会返回新的一个 symbol

var sym = Symbol.for("mario")
sym.toString()
// "Symbol(mario)"，mario 既是该 symbol 在 symbol 注册表中的键名，又是该 symbol 自身的描述字符串
```



为了防止冲突，最好给你要放入 symbol 注册表中的 symbol 带上键前缀。

```js
Symbol.for("my.foo")
```





## Symbol.keyFor()

**`Symbol.keyFor(sym)`** 方法用来获取全局 symbol 注册表中某个 symbol 对象的键。

```js
// 创建一个全局 Symbol
var globalSym = Symbol.for("foo")
Symbol.keyFor(globalSym) // "foo"

var localSym = Symbol()
Symbol.keyFor(localSym) // undefined

// 以下 Symbol 不是保存在全局 Symbol 注册表中
Symbol.keyFor(Symbol.iterator) // undefined
```

