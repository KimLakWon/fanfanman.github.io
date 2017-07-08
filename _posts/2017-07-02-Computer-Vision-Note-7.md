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
- Geometry: by making a disparity map (disparity = distance a point has moved in two views), we can make a depth map.

### Lesson 3B-L2 Epipolar geometry
- For a single point in the left image, the possible position that it could project onto the right image is along a line, this is called epipolar constraint.
- baseline: line joining the camera centers
- epipolar plane: plane containing baseline and world point
- epipolar line: intersection of epipolar plane with the image plane, also the epipolar constraint
- epipole: point of intersection of baseline with image plane

### Lesson 3B-l3 Stereo correspondence
- Beyond the epipolar constraint, we need more constraints to help project left-image points onto right-image, such as similarity, uniqueness, ordering. This is called correspondence problem, which helps us to find matches in the image pair.
- In order to find matching point in the right image, we search along a slim window to find most similar (in correlation) point. This can serve as a similarity constraint.
- Best fitting of left and right image pixels can be reached by dynamic programming.