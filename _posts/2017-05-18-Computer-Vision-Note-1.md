---
layout: post
title:  "Computer Vision Note 1"
date:   2017-05-18 16:22:00 -0500
comments: false
categories: computervision
tags: 
---

### Overview
Well, it's my second time trying to learn computer vision. Just a little bit interested in it.

The difference between computer vision and computer graphics would be:

| Input\Output | Image | Knowledge |
| Image | Image processing | Computer vision |
| Knowledge | Computer graphics | Artificial Intelligence |

- Calm down and carry on!

### Topic Outline
- Image processing and Computer vision
- Camera models and views
- Features and matching
- Lightness and Brightness
- Image motion
- Motion and tracking
- Classification and recognition (Machine Learning)

Hope I could master the material...

### Lesson 2A-L1 Images as functions

- Images can be inpreted as an intensity function about x and y, I(x, y) for grey-level images, and rgb vector-functions for color images.
- Some useful functions in matlab to process an image:
```matlab
% Note: matlab starts from 1 and x:y includes number y...
img = imread("dolphin.png");
imshow(img);
disp(size(img));
cropped = img(ymin:ymax, xmin:xmax); % At a given location (row, col):
img_red = img(:, :, 1); % filter through color plane
plot(img_red(150, :)); % plot image values on 150th row
function result = functionname(img, value)
	result = img .* value;
endfunction % adding function
noise = randn([2 3]); % adding noise drawn from gaussian distribution
[n, x] = hist(noise, [-1, 0, 1]); % making a histogram from noise
noise = randn(size(im)).*sigma; % gaussian noise
```