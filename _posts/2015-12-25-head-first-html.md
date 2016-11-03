---
layout: post
title:  "Head first HTML, CSS and XHTML"
date:   2015-12-25 15:21:08 -0500
comments: true
categories: update
tags: html css xhtml
---
相关书籍与网页:

- [知乎：Web建站技术中html, html5, css, sql...是什么](http://www.zhihu.com/question/22689579/answer/22318058) （前端和后端分别是什么？用哪些技术实现？）
- [Head first HTML, CSS and XHTML](http://headfirstlabs.com/books/hfhtml/)


## Head First HTML, CSS and XHTML reading notes:
---

### Chapter 1 Web 语言
- HTML: HyperText Markup Language, used to build website's structure.
- CSS: Cascading Style Sheet, used to control HTML's outlook.

### Chapter 2 认识HTML中的'HT'

### Chapter 3 网页创建
1. 区分块元素(block)，内联元素(inline)，空元素：
	- 块元素：前后都有换行符，ex: 'h2', 'blockquote';
	- 内联元素：在网页中随文字流出现在行内，ex: 'a', 'p', 'em'。
	- 空元素：没有实际意义的元素，ex: 'br', 'img'
2. html列表：
	1. 把每个列表项目放进一个`<li>`元素中，
	2. 用`<ol>`或`<ul>`封装列表元素。`<ol>`封装有序列表，`<ul>`封装无序列表。

### Chapter 4 Web之旅
1. URL: Uniform Resource Locator 统一资源定位符。
	是一个全球性地址，用于定位网上的资源。
	URL=接受资源的协议(http) + 网站名(fanfanman.github.io) + 以根目录到资源的绝对路径(index.html)
2. HTTP：TyperText Transfer Protocol 超文本传输协议。
	即传输超文本(HTML网页)的协议。

### Chapter 5 认识媒体
- JPEG与GIF的区别：
    - JPEG：用于照片和复杂图像，有损格式，颜色更丰富，不支持透明。
	- GIF：用于纯色图像、logo、几何图形，颜色少，无损格式，可透明背景。

### Chapter 6 严格的HTML
- 这本第二版的书的所有内容都基于HTML4，而现已推行HTML5，因此最好使用[W3C](http://www.w3schools.com)的规范。

### Chapter 7 添加一个'X'到HTML

### Chapter 8 开始学习CSS

### Chapter 9 字体和颜色样式

### Chapter 10 盒模式
- 题目越来越鬼畜，内容越来越多余。

### Chapter 11 高级网站构建
- `<div>`外容器，`<span>`内联容器。

### Chapter 12 布置元素

### Chapter 13 表格与更多列表
- 表格：表格用`<table>`表示，`<th>`表头元素包含一个单元格，`<tr>`元素包含一行，`<td>`包含一个表格中的数据单元。

### Chapter 14 交互活动
- Web应用程序基于脚本语言(如php)或程序语言(如python)，web应用程序可以接收浏览器发送给服务器的数据，并响应。
- 表单有：
	- `<form action="example.php" method="POST">表单元素</form>`
	- `<input type="text" name="fullname">输入文本框</input>`
	- `<input type="submit">Submit按钮</input>`
	- `<input type="radio" name="问题名" value="hot值">单选框</input>`
	- `<input type="checkbox" name="问题名" value="啥">复选框</input>`
	- `<textarea name="comments" rows="10" cols="48">文本区</textarea>`
	- `<select name="选择列表">`
		- `<option value="狗">狗</option>...</select>`
	- ...
- 浏览器输送数据的两种方式：
	- Post：把表单变量打包后隐藏在后台发送给服务器。
	- Get：将表单变量附加在URL后发送给服务器。

### Appendix A 更多思考
1. 如何嵌入多媒体与flash？用`<embed>`或`<object>`。
2. 如何增强客户端交互活动？使用客户端脚本语言，ex: JavaSript。
3. 如何做Web应用程序？使用服务器端脚本语言，ex: PHP, Ruby...
4. 如何更容易被搜索引擎找到？在`<head>`开始从添加两个`<mega>`标签。
	- `<meta name="description" content="verbose description"/>`
	- `<meta name="keywords" content="shitty keyword, crappy keyword"/>`<br>
如果不希望被找到，可以添加：
	- `<meta name="robota" content="noindex, nofollow" />`<br>
思考：关于爬虫协议robots.txt。
5. 如何增强兼容性？
	- 制作适应打印的样式表。
	- 使网页适应移动设备以及各浏览器。
