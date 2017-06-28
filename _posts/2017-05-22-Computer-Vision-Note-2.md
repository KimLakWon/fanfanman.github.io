---
layout: post
title:  "Computer Vision Note 2"
date:   2017-05-22 16:22:00 -0500
comments: false
categories: computervision
tags: 
---

### Lesson 2A-L2 Filtering
This lesson is about removing noise to recover real information. The method of averaging over nearby bins to get real info is called correlation filtering, there are also two types of averaging:
- Moving average, which is to take uniform average of nearby bins as real info
- Weighted moving average, which is to assign weights onto nearby bins and then take average. Also called cross correlation. A gaussian filter is usually being used.
- Matlab gaussian filter function:
'''matlab
h = fspecial('gaussian', hsize, sigma);
surf(h)
imagesc(h);
outim = imfilter(im, h)
'''

### Lesson 2A-L3 Linearity and convolution
- Linearity: An operator H (or system) is linear if two properties hold (f1, f2 are functions, a is a constant): 1. Additivity: H(f1 + f2) = H(f1) + H(f2); 2. Multiplicative scaling (Homogeneity of degree 1): H(af1) = aH(f1)
- But there's a problem with correlation that, when you input a pulse function, the result after applying matrix multiplication would be mirror to the matrix function. So, we need to apply convolution.
- Boundary issues: there are several options to deal with boundaries: original, circular, replicate, symmetric.
- Sharpening filter: 2 times pulse filter - blurry filter
- Median filter, non-linear but edge preserving, can be used to filter through sparse random noise ('salt and pepper' noise), can be called smoothing operator.

### Lesson 2A-L4 Filters as templates
- Matching a piece of picture onto the entire pictures uses a method called 'normalized correlation', actually it's all about calculating chi squared... Or finding a subsequence in a sequence requires further knowledge in algorithms.
- This is especially useful in detecting some template in a complicated figure (term: template matching). Could be used in alphabet recognition, face recognition, these kinds of computer vision application areas.

### Lesson 2A-L5 Edge detection: Gradients
- Edges are important in recogniting an object in an image
- Origin of edges: surface normal discontinuity, depth discontinuity, surface color discontinuity, illumination discontinuity. Edge detection is important in coverting image to curves that matter.
- Edge detection basic idea: looking for a neighborhood with strong signs of change.
- Edge is a place of rapid change in the image intensity function. So finding edges is somehow related to finding local extremes in derivatives.
- Basic idea: 1. define differential operators: when applied to the image, it returns some derivatives. 2. We apply these operators as masks/kernels that compute the image gradient function. 3. Threshold this gradient function to select the edges.
- Gradient points in the direction of most rapid increase in the intensity, in computer science, we need to do discrete gradient. So, horizongtal gradient would become df/dx = [f(x+1, y) - f(x, y)]/1
- discrete gradient operator to deal with images would look like ![gradientoperator](http://web.ics.purdue.edu/~zhan2600/assets/udacitycv/cvgradientoperator.png) and Sobel operator is like ![sobeloperator](http://web.ics.purdue.edu/~zhan2600/assets/udacitycv/cvsobeloperator.png)
- Some well-known gradient operators: Sobel, Prewitt, Roberts. Matlab filter function: filt = fspecial('sobel'), which applies sobel operator.
- Keep in mind the difference between correlation and convolution in image processing.
- But in real world, due to noises the gradient operator may fail somehow, so we may need to do smoothing first, or smoothing after gradient operator. (It's a bit like in signal system, all about operators). Varying filter rather than filtering after filtering usually saves time and space.