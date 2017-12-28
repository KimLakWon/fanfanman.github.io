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
- Projective transformations: for 2D images it's a 3*3 matrix applied to homogeneous matrices (x, y, 1). According to different types of transformations, we need different pairs of points to map. For example, how many points do we need to do homography? Four to map each edge of rectangle to each edge on the other rectangle
- What generates the error?

### Lesson 3D-L2 Homographies and Mozaics
- Usually there are eight degrees of freedom in homography transformations
- The geometric meaning of using homogeneous matrix is because: each point (x, y) on the plane (at z=1) is represented by a  ray (sx, sy, s). All points on the ray are equivalent. Which means, points on the image plane (x, y, 1) is equivalent to a ray (sx, sy, s) in space coming from the center of projection (0, 0, 0) and intersecting the image plane (z=1).
- Basic question: how to relate two images from the same camera center? Answer: Cast a ray through each pixel in PP1, then draw the pixel where that ray intersects PP2. So the only thing that matters is to know where the camera points.
- Application: panorama. Procedure: Take a sequence of images from the same position; Compute transformation between second image and first; Transform the second image to overlap with the first; Blend the two together to create a mosaic (panorama).
- The procedure of transforming the secodn image to overlap with the first is homography. In order to solve the homography operator, we need 4 pairs of points and use SVD method as discussed in section 3C-L3.

### Lesson 3D-L3 Projective Geometry
- The initiative to use homogeneous coordinates is that: each point (x, y) on the plane is represented by a ray (sx, sy, s).
- In homogeneous coordinates, 2D lines ax+by+c=0 can be thought as dot product of two matrices (a,b,c) and (x,y,1) where l = (a, b, c) is a normal line.
- Projective line: is a plane of rays through origin defined by the normal l = (a, b, c)
- What is the line l spanned by rays p1 and p2? It should be perpendicular to l the normal line l = p1 cross p2.

### Lesson 3D-L4 Essential Matrix
- Problem: Given two views of a scene, what is the relationship between the location of a scene point in one image and its location in the other? We need to find out the matches (restraints)
- Find pairs of points that correspond to same scene points: we need Epipolar Constraint, it reduces correspondence problem to 1D search along conjugate epipolar lines
- terms:
	- baseline: line joining the camera centers
	- epipolar plane: plane containing baseline and world point
	- epipolar line: intersection of epipolar plane with the image plane - come in pairs
	- epipole: point of intersection of baseline with image plane
- The point is to transfer geometry into algebra.
- Aside 1: vector cross product takes two vectors and returns a third vector that's perpendicular to both inputs
- Aside 2: Cross product can be redefined to a matrix operation.
- In algebra, essential matrix relates point x in one image to correpondent point x' in another image, x'Ex = 0. Where epipolar line l = EX. Essential matrix E = [Tx]R, where T is transformation between two cameras

### Lesson 3D-L5 Fundamental Matrix
- Main idea of weak calibration: estimate epipolar geometry from a (redundant) set of point correspondences between two uncalibrated cameras.
- For uncalibrated cameras, we use fundamental matrix instead of essential matrix
- Fundamental matrix is 3*3, singular, maps from a point to a line.
- Fundamental matrix relates pixel coordinates in the two views, and is more general form than essential matrix, bc we remove the need to know intrinsic parameters
- So if we estimate fundamental matrix from correspondences in pixel coordinates, we can reconstruct epipolar geometry without intrinsic or extrinsic parameters.
- Each point correspondence generates one constraint on F.
- There's a very unstable algorithm called Eight-point algorithm to solve F.
- Summary:
	- For 2-views, there is a geometric relationship that defines the relation between rays in one view to rays in the other - epipolar geometry
	- These relationships can be captured algebraically as well: calibrated - essential matrix; uncalibrated - fundamental matrix
	- This relation can be estimated from point correspondences.