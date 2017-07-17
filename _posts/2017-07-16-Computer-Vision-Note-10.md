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