---
title: Unhandled promise rejection(env：Windows,mp,1.06.2206020; lib：2.26.2)
date: 2023-5-18
tags:
 - 小程序
categories:
 - 小程序
---



# 问题

运行小程序时，发现报错

::: danger

Unhandled promise rejection(env: Windows,mp,1.06.2206020; lib: 2.26.2)

:::



![image-20230518102640362](./unhandled_promise_rejection.assets/image-20230518102640362.png)



# 原因

基础库版本过高



# 解决方案

选择版本较低的

![image-20230518102955392](./unhandled_promise_rejection.assets/image-20230518102955392.png)

