---
layout: post
title:  "Computer Vision Note 10"
date:   2017-07-14 19:45:00 -0500
comments: true
categories: computervision
tags: 
---

### Lesson 4A-L1 Introduction to "features"
- Suppose I have two images related by some transformation, or have two images of the same object in different positions, How to find the transformation of iamge 1 that would align with image 2? We need to find correspondences, Local Features.
- Goal: find points in an image that can be found in other images; found precisely - well localized; found reliably - well matched.
- Why? Want to compute a fundamental matrix to recover geometry; allow computation of how camera moved -> depth -> moving objects. This is called point matching problem.
- Matching process: detect features in both images; match feature - find corresponding pair; use these pairs to align images.
	- Problem 1: how to detect the same point independently in both? We need a repeatable detector.
	- Problem 2: For each point correctly recognize the corresponding one? We need a reliable and distinctive descriptor.
- Characteristics of good features: repeatability/precision, Saliency/Matchability/Uniquenss, Compactness/Efficiency, Locality/SmallArea

### Lesson 4A-L2 Finding Corners
- Basic idea: we need a change in gradience in more than one direction.
- Harris corners: approximation model and error model: calculate the diff between intensity at a point and intensity at a slightly shifted point, which is like calculating derivative of gradience.
- There's a lot of math and matrix operations, check wikipedia for more info.
- Harris detector algorithm:
	- Compute Gaussian derivatives at each pixel
	- Compute second moment matrix M in a Gaussian window around each pixel
	- Compute corner response function R
	- Threshold R
	- Find local maxima of response function (nonmaximum suppression)
- Other corners: Shi-Tomasi 94

### Lesson 4A-L3 Scale Invariance
- Some properties about harris detector: mostly invariant to additive and multiplicative intensity cahnges, but may have threshold issue for multiplicative; invariant to image scale
- How to scale pictures to the same size to reach scale invariance?
- One method: at a point, compute the scale invariant function over different size neighborhoods
- Solution: design a function on the region, which is not affected by the size but will be the same for "corresponding regions", even if they are at different sizes/scales
- 