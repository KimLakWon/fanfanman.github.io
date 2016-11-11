---
layout: post
title:  "Computer Graphics: How to Install JOGL in Eclipse Windows 7"
date:   2016-11-08 13:00:00 -0500
comments: false
categories: jekyll update
tags: 
---

## How to install JOGL in Eclipse in Windows 7
The official installation guide is attached [here](http://jogamp.org/wiki/index.php/Downloading_and_installing_JOGL).
- Firstly, a complete package of jogamp should be downloaded (which includes jogl packages) from this [link]( https://jogamp.org/deployment/jogamp-current/archive/jogamp-all-platforms.7z).
- Copy jogamp package to default Eclipse workspace directory, and unzip.
- Set up JOGL in Eclipse according to [official instructions](https://jogamp.org/wiki/index.php/Setting_up_a_JogAmp_project_in_your_favorite_IDE#Eclipse_IDE_project). Which is, to create a specific library package for JOGL, such that everytime we need to create an application which uses JOGL package, we refer to that specific JOGL package.
