---
layout: post
title:  "Computer Vision Note 7"
date:   2017-07-02 17:37:00 -0500
comments: false
categories: computervision
tags: 
---

### Lesson 3B-L1 Stereo Geometry
- We need multiple views to determine real 3D depth of an object
- How human eyes see in 3D? By seeing perspective, shading, texture, focus/defocus, motion
- Stereo: think of shape from two views, like human eyes. An anaglyph stereo put red and blue colors to either of the views, such that we can form a 3D vision in head.
- Basic idea of stereo(立体声): the movement from two views show people the depth of faraway background
- Basic stereo geometry: if there are two cameras pointing to the same object, the motion of moving background in two images can tell people the depth of non-moving object in the image. In brief, the point is to analyze the shape from 'motion' between two views.
- Geometry: firstly we assume the two cameras are pointing in parallel; assume baseline is B and focus length f, point p is distance z in coordinates; then point p projects into left and right images, with maths process omitted, we can calculate depth z from simple geometry in real world.
- Thus by making a disparity map (disparity = distance a point has moved in two views), we can make a depth map.

### Lesson 3B-L2 Epipolar geometry
- 