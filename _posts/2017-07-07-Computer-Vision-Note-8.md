---
layout: post
title:  "Computer Vision Note 8"
date:   2017-07-07 23:45:00 -0500
comments: false
categories: computervision
tags: 
---

### Lesson 3C-L1 Extrinsic Camera Parameters
- This lesson is about how to project coordinate system to the camera.
- geometric camera calibration: if we want to use the camera to tell us things about the world, we need the relationship between coordinates in the world and coordinates in the image.
- geometric camera calibration is composed of 2 transformations: extrinsic parameters, and intrinsic parameters
- extrinsic parameters: from some (arbitrary) world coordinate system to the camera's 3D coordinate system
- intrinsic parameters: from the 3D coordinates in the camera frame to the 2D image plane via projection
- In brief, geometric camera calibration is about coordinate transformation, simple.
- 