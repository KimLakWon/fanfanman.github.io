---
layout: post
title:  "Computer Vision Note 4"
date:   2017-05-26 14:44:00 -0500
comments: false
categories: computervision
tags: 
---

### Lesson 2B-L3 Generalized Hough Transform
- Non-analytic models: parameters express variation in pose of scale of fixed but arbitrary shape.
- Visual code-word based features: not edges but detected templates learned from models.
- For an arbitrary figure, we do not know how to vote, so we need to build a Hough table.
- Training Example: build a Hough table: 1. For each boundary point, compute displacement vector: r = c - pi (c is reference point to locate figure); 2. measure the gradient of angle theta at that boundary point; 3. store that displacement vector into a table indexed by theta.
- Recognition example: at each boundary point, measure the gradient angle theta; 2. look up all displacements in theta in displacement table; 3. vote for a center at each displacement.
- general idea: 在training中不停采集各个边界距离中心的可能位移。在实际测量中模拟这些可能位移，类似fitting，找出契合度最高的点。
- generalized Hough tranform algorithms: if orientation is known (you know all edges are pointing inwards from gradient): 1. for each edge point, compute gradient direction theta, retrieve displacement vectors r to vote for reference points; 2. peak in this Hough space (x, y) is reference point with most supporting edges. if orientation is unknownL for each edge point, for each possible master theta2: compute gradient direction theta, new theta' = theta - theta2, for each theat' retrieve displacement vectors to vote for reference point. Peak in this Hough space (x, y, theta2) is reference point with most supporting edges.
- If scale S is unknown: for each edge point, for each possible master scale S: compute gradient direction theta, for each theta retrieve displacement vectors r, vote r scaled by S for reference point. Peak in this Hough space (x, y, s) is reference point with supporint edges.
- instead of indexing displacements by gradient orientation, index by 'visual codeword', which is to find feature patches in a figure and use these features to find the figure.

### Lesson 2C-L1 Fourier transform
- Decomposing an image: basis sets: a basis B of a vector space V is a linearly independent subset of V that spans V. suppose that B = {v1, ..., vn} for a finite subset of a vector space over a field F. Then B is a basis if it satisfies the following conditions: linear independence,  and spanning property.
- Consider an image as a point in a N times N size space - can rasterize into a single vector, and the normal basis is just the unit vectors.
- And there's a special basis set called Fourier basis set. The square wave can be written as ASigma(1/k times sin(2pi kt)). 
- In Fourier transform, we want to convert an image in space to frequency. The original image is y = f(x), after Fourier Tranform, it's F(w) = R(w) + iI(w), and magnitude A = sqrt(RI) and phase phi = angle between R and I. real functions are due to even functions and imaginary functions are due to odd functions.