---
layout: post
title:  "JavaScript DOM 编程艺术"
date:   2015-12-29 16:57:00 -0500
comments: true
categories: jekyll update
tags: JavaScript
---

[DOM Scripting](http://www.amazon.com/DOM-Scripting-Design-JavaScript-Document/dp/1430233893): Web Design with JavaScript and the Document Object Model 读书笔记

---

### Chapter 1 简史
- JavaScript是一种脚本语言，通常只能通过浏览器去完成某种操作而不是像普通意义上的程序那样可以独立运行。
- DOM: Document Object Model
  
  > W3C对DOM的定义是：“一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态的对文档的内容、结构和样式进行访问和修改。”

### Chapter 2 JavaScript 语法
- 程序设计语言分为解释型和编译型两大类：
  - Java和C++等语言需要一个编译器(Compiler)来将代码翻译为直接在计算机上执行的二进制可执行文件的程序。
  - 对于JavaScript语言，浏览器将负责完成有关的解释与执行工作。浏览器中的js解释器将直接读入源代码并加以执行。
- JS语法：
  - Declaration: `var A="happy", B="3"`, 区分大小写。
  - 不需要进行类型声明(int, string...)，是弱类型(weakly typed)语言。
  - 声明数组：`var beatles = Array(); `或者`var beatles = ["John", "Paul", "George", "Ringo"];`。
  - javascript中的map是关联数组(associative array)
  - 定义函数：`function name(argument) {statements;}`

### Chapter 3 DOM
- 四种方法：
  - `document.getElementById()`方法，返回一个对象。
  - `element.getElementsByTagName(tag)`方法，返回一个对象数组。
  - `object.getAttribute(attribute)`方法，返回对象的一个属性。
  - `object.setAttribute(attribute, value)`方法，修改属性节点的值。

### Chapter 4 案例研究：JavaScript图片库

### Chapter 5 JavaScript编程原则
- 脚本编程中需要注意一下几点：
  - 预留退路：防止浏览器不兼容情况。
  - 分离JavaScript：防止不兼容。
  - 向后兼容性：不同的浏览器对js的支持程度不同，因此需要在脚本里对浏览器对js的支持程度进行查询。使用`if (!method) {use another method; }`。
- 一言以蔽之：就是要注意兼容性。

### Chapter 6 案例研究：JavaScript图片库改进版

### Chapter 7 动态创建HTML内容
1. Normal method to create HTML contetnt: `document.write()` and `innerHTML`. 
  - Both of them aim at changing existed elements.
  - `document.write()` method: write element into HTML. Cons: have to call function in HTML, JS isn't separated from HTML.
  - `innerHTML`: read and change the HTML content of a certain element. Cons: not DOM standard. Which means, the inserted string is only read into HTML webpage as a string, not a DOM tree structure. Pros: can insert a large amount of code immediately.
2. Advanced method: `createElement()`, `createTextNode()`, `appendChild()` and `insertBefore()`. Can create elements, better method. Working principle: HTML builds the structure of website, and JavaScript functions modify little details of HTML. 

### Chapter 8 Content Expansion
- Two main principles: progressive enhancement, reserve backtrail.

### Chapter 9 CSS-DOM
- The presentation layers of websites are built with css.
- The behavior layers of websites answer "how to react to events" are built by HTML and JavaScript.

### Chapter 10 Use JavaScript to make animation
- Time: JS can use `var variable = setTimeout("function", interval)` to execute function with a certain time interval.

### Chapter 11 JavaScript Design Example

### Chapter 12 DOM Scripting Prospect
- Ajax: asynchronous tech.
- Web Application Development: put desktop programs online. 
  - Pros: modification to online applications can apply to every user immediately, no need to download and update.
  - Cons: compared to desktop operating system, browser doesn't have enough functions. GUI + interactive function aren't complete.
- As the DOM tree is similar to OS file tree, why not put applications and files online, and get rid of the redundant physical operating system.
- To quote from Tim Berners Lee, inventor of World Wide Web:
  
  > Web users ultimately want to get at data quickly and easily. They don't care as much about attractive sites and pretty design.
 
  > Intellectual property is an important legal and cultural issue. Society as a whole has complex issues to face here: private ownership vs. open source, and so on.

- The power of internet relies on its inclusive property. The main feature is that it's accessible to everyone.
