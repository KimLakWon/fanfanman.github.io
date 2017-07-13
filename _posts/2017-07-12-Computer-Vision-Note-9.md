---
layout: post
title:  "Computer Vision Note 9"
date:   2017-07-12 19:45:00 -0500
comments: true
categories: computervision
tags: 
---

### Lesson 3D-L1 Image to Image Projection
- Calibration is about projecting the 3D world to a 2D image, for the next few lessons, we are gonna learn about how to map one image to another.
- Several operations: translations, similarity, euclidean, affine. All about matrix multiplications.
- Projective transformations: for 2D images it's a 3*3 matrix applied to homogeneous matrices (x, y, 1). According to different types of transformations, we need different pairs of points to map. For example, how many points do we need to do homography? Four to map each edge of rectangle to each edge on the other rectangle.

### Lesson 3D-L2 Homographies and Mozaics
- Usually there are eight degrees of freedom in homography transformations
- The geometric meaning of using homogeneous matrix is because: each point (x, y) on the plane (at z=1) is represented by a  ray (sx, sy, s). All points on the ray are equivalent. Which means, points on the image plane (x, y, 1) is equivalent to a ray (sx, sy, s) in space coming from the center of projection (0, 0, 0) and intersecting the image plane (z=1).
- Basic question: how to relate two images from the same camera center? Answer: Cast a ray through each pixel in PP1, then draw the pixel where that ray intersects PP2. So the only thing that matters is to know where the camera points.
- Application: panorama. Procedure: Take a sequence of images from the same position; Compute transformation between second image and first; Transform the second image to overlap with the first; Blend the two together to create a mosaic (panorama).
- The procedure of transforming the secodn image to overlap with the first is homography. In order to solve the homography operator, we need 4 pairs of points and use SVD method as discussed in section 3C-L3.
- 