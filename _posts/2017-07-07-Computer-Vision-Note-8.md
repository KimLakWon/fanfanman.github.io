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
- In space coordinate transformations, there are transform operators, rotation operators and etc.
- Just found a good way to express rotation coordinates, this is the term used in aero engineering: heading, pitch and roll, these are the three parameters in spherical coordinates.
- All about transformation, translation and rotation.
- Extrinsic parameter matrix transfers a matrix from world coordinates to camera coordinates. There are 6 degrees of freedom. 即，通过矩阵变换将自然坐标系内的物体转变到照相机坐标系的坐标矩阵。

### Lesson 3C-L2 Intrinsic Camera Parameters
- 即，将照相机坐标系内的三维图像投射到镜头上
- The trick is also about expressing the intrinsic transformation oeprator in matrix. Some parameters to be considered: camera focal length, pixel x size, pixel y size, two offsets in xy directions, and skews of coordinate system.
- In conclusion, a camera operator M is described by several parameters: translation T of the optical center fromt he origin of world coordinates; rotation R of the camera system; focal lenght and aspect (f, a), principle point (x', y') and skew (s)
- Projection equation is the cumulative effect of all parameters: M = intrinsic * projection * rotation * translation, 11 degrees of freedom in total.

### Lesson 3C-L3 Calibrating Cameras
- Direct linear calibration, point on screen (u, v, 1) = operator M (3*4 matrix) * real world coordinates (X, Y, Z, 1)
- Trying hard to update every day