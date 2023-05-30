---
title: this的四个绑定规则
date: 2020-05-27
---



为什么需要 this？

在常见的编程语言中，几乎都有this这个关键字（Objective-C 使用的时 self），但是 JavaScript 中的 this 和常见的面向对象语言中的this不太一样

常见的面向对象编程语言中，比如 Java、C++、Swift、Dart 等等一系列语言中，this 通常只会出现在类的方法中

也就是你需要有一个类，类中的方法（特别是实例方法）中，this 代表的时当前调用对象

但是 JavaScript 中的 this 更加灵活，无论是它出现的位置还是它代表的含义



this 在全局作用域指向什么?

```javascript
//浏览器：window（globalObject）
//node环境：{}
console.log(this)
console.log(window)
```

但是在开发中很少直接在全局作用域下使用this，通常都是在函数中使用

- 所有的函数在被调用时，都会创建一个执行上下文
- 这个上下文中记录着函数的调用栈、AO 对象等
- this 也是其中的一条记录，this 是在函数执行时被绑定的

**this 指向什么，跟函数所处的位置时没有关系的，跟函数被调用的方式有关系**

​	

## 1.默认绑定

独立函数调用，this 会默认绑定到 window

```javascript
//案例一
function foo() {
  console.log(this)
}

foo() //window
```

```javascript
//案例二
function foo1() {
  console.log(this)
}
function foo2() {
  console.log(this)
  foo1()//window
}
function foo3() {
  console.log(this)
  foo2()//window
}

foo3()//window
```

```javascript
//案例三
var obj = {
  name: 'why',
    foo: function() {
        console.log(this)
    }
}

var bar = obj.foo
bar() //window
```

```javascript
//案例四
function foo() {
  console.log(this)
}
var obj = {
  name: 'why',
  foo: foo
}

var bar = obj.foo
bar() //window
```

```javascript
//案例五
function foo() {
  function bar() {
      console.log(this)
  }
  return bar
}

var bar = foo()
bar() //window
```





## 2.隐式绑定

obj.foo()

通过某个对象进行调用，也就是它的调用位置，是通过某个对象发起的函数调用

```javascript
//案例一
function foo() {
  console.log(this)
}

var obj = {
  name: 'why',
  foo: foo
}

obj.foo()
```

```javascript
//案例二
var obj = {
  name: 'why',
  eating: function() {
      console.log(this.name + '在吃东西')
  }，
  running: function() {
      console.log(this.name + '在跑步')
  }
}

obj.eating()//why
obj.running()//why

var fn = obj.eating
fn()//空
```

```javascript
//案例三
var obj1 = {
  name: 'obj1'
  foo: function() {
      console.log(this)
  }
}

var obj2 = {
  name: 'obj2',
  bar: obj1.foo
}

obj2.bar()
```





## 3.显示绑定

隐式绑定有一个前提条件

- 必须在调用的对象内部有一个对函数的引用（比如一个属性）
- 如果没有这样的引用，在进行调用时，会报找不到该函数的错误
- 正是通过这个引用，间接地将 this 绑定到了这个对象上

如果我们不希望在对象内部包含这个函数的引用，同时又希望在这个对象上进行强制调用，就用显示绑定

```javascript
function foo() {
  console.log(this)
}

foo.call('aaa')//aaa
foo.apply('bbb')//bbb
```

```javascript
//call和apply地区别
function sum(n1, n2) {
  console.log(n1 + n2, this)
}

sum.call('call', 20, 30)//50 call
sum.apply('apply', [20, 30])//50 apply
```

```javascript
//bind
function foo() {
  console.log(this)
}

var newFoo = foo.bind('aaa')
newFoo()

var obj = {
  foo: function foo() {
      console.log(this)
  }
}

obj.foo.call('abc')
```





## 4.new绑定

JavaScript 中的函数可以当作一个类的构造函数来使用，也就是使用new关键字

使用 new 关键字来调用函数执行流程如下：

1. 创建一个全新的对象
2. 这个新对象会被执行 prototype 连接
3. 这个新对象会绑定到函数调用的 this 上（this 的绑定在这个步骤完成）
4. 如果函数没有返回其他对象，表达式会返回这个新对象

```javascript
function Person() {
  this.name = name
  this.age = age	
}

var p = new Persoon('why', 18)
console.log(p.name, p.age)//why 18
```



## 5.this的其他补充

```javascript
//1.setTimeout
setTimeout(() => {
  console.log(this)//window
},2000)

//2.监听点击
box.onclick = function() {
  console.log(this)//box
}
box.addEventListener('click', function() {
  console.log(this)//box
})

//3.数组 forEach/map/filter/find
arr.forEach(item => {
  console.log(this)//abc
}, 'abc')
arr.forEach(item => {
  console.log(this)//window
})
```

::: tip

规则优先级：

默认绑定（独立函数调用） < 隐式绑定（obj.foo()） < 显示绑定（apply / call / bind，其中bind优先级更高） < new绑定

:::

## 6.this规则之外



### 6.1.忽略显示绑定

```javascript
function foo() {
  console.log(this)
}

//当传入null/undefineds，自动将this绑定成全局对象
foo.apply(null)
foo.apply(undefined)
```



### 6.2.间接函数引用

```javascript
var obj1 = {
  name: 'obj1',
  foo: fucntion() {
  	console.log(this)
  }
}

var obj2 = {
  name: 'obj2'
}

//obj2.bar = obj1.foo
//obj2.bar()//obj2

(obj2.bar = obj1.foo)()//独立函数调用，window
```



### 6.3.箭头函数

- 箭头函数不会绑定 this、arguments 属性，而是根据外层作用域来决定 this

- 箭头函数不能作为构造函数来使用（不能和 new 一起使用，会抛出错误）

```javascript
// () 参数
// => 箭头
// {} 函数执行体
var foo = (num1,num2) => {
    
}

//简写一，参数只有一个时，小括号可省略
nums.forEach( item => {
  console.log(item)
})

//简写二，函数执行体只有一行代码，大括号可省略
//并且它会默认讲这行代码的执行结果作为返回值
nums.forEach( item => console.log(item))
var newNums = nums.filter( item => item % 2 === 0 )

//简写三，如果箭头函数只有一行代码，并且返回一个对象，这个时候如何编写简写
var bar = () => {
  return {name: 'why',age: 16}
}

var bar = () => ({name: 'why',age: 16})
```

```javascript
//箭头函数的this获取
var obj = {
  data: [],
  getData: function() {
    //没有箭头函数之前
    var _this = this
    setTimeout(function() {
      var result = [4,5,6,7,8]
      _this.data = result
    },2000)

    //箭头函数之后
    setTimeout(() => {
      var result = [4,5,6,7,8]
      this.data = result
    },2000)
  }
}

obj.getData()
```


