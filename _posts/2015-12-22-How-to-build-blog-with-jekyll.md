---
layout: post
title:  "How to build a static blog with Jekyll"
date:   2015-12-22 16:59:00 -0500
comments: true
categories: jekyll update
tags: Jekyll Github
---
### Why do we build a blog with Jekyll?
1. The blog will be hosted freely on our free Github account, which removes the redundent process to request a domain name.
2. Once the blog was set up on Jekyll frame, it would be much easier to write a blog in markdown language (.markdown) or Github Flavoured Markdown language (.md).
3. As a programming learner, it would be better to learn how to code to blog rather than to drag to blog.

### How do we build a blog with Jekyll?
1. Install Jekyll on local host as described in [Jekyll official documentary](http://jekyllrb.com/docs/home/).
2. Launch Github page in a new repository username.github.io.
3. Type 
```
jekyll new .
```
to build a jekyll project in the same repository. Jekyll will automatically generate all the needed folders.
4. Change multiple files to build your own website:
  - Update `_config.yml` to change global settings shown in the blog.
  - Update `/css/main.css` to make your own blog interface.
  - Update `/_posts` to add posts to the blog site.
  - No need to update `/_site`, as Github will automatically generate the website with current codes.
  - No need to update `/_layout`, it only defines the div of the blog site.
  - Update `/_includes/head.html` or `/_includes/header.html` or `/_includes/footer.html`, if unhappy with the div of current blog site.
5. git push current codes, and github will present you your personal website.

### Some technical details about building with Jekyll.
1. All the directories used in Jekyll are absolute directories, not comparative.
2. The files which won't be synced to github are recorded in `.gitignore`, such as `/_site`. Thus, while adding changes to github, should type `git add .` instead of `git add *`.
3. Jekyll applies a nice [YAML](http://yaml.org) front matter block. As described in the document, 
   
   > YAML ain't markup language, YAML is a human friendly data serialization standard for all programming language.
   
   In my view, it's more like java class. Which means, you can embed your frame and setup of website into another webpage using YAML. All the features of parent webpage will be inherited into children's webpage.
