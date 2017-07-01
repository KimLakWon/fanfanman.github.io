---
layout: post
title:  "Computer Vision Note 5"
date:   2017-06-29 14:44:00 -0500
comments: false
categories: computervision
tags: 
---

### Lesson 2C-L2 Convolution in frequency domain
- Fourier transform enables us to compress figures into a frequency domain.
- Convolution in spatial domain = Multiplication in frequency domain, with math omitted. Convolution: g(x) = f(t) times h(x-t). Which means, The fourier transform of convolution = multiplication of fourier tranform of each operator, which makes the fourier transform of multiplication of two large functions quicker.

### Lesson 2C-L3 Aliasing
- Fourier transform of an inpulse train is another inpulse train.
- How to store and compute continuous functions? You sample and record down sampled values. 
- How to reconstruction: Making samples back into continuous function? You have to guess what the functions are doing and connect the dots.
- For example, in computer graphics when there's an illumination and you made a graph on screen by sampling, you can only get graphs in pixels. Then you need to smoothen the pixels to get a continuous graph.
- But sometimes if you didn't sample enough, you cannot distinguish the actual shape of waveform, this is called aliasing: signals "traveling in disguise" as other frequencies.
- How to prevent aliasing except from taking more dots? get rid of some high frequencies but you will lose information.
- In order to get rid of high frequencies, we can put a lowpass filter at source, then we will take less high-frequency info from the source, thus we won't worry about aliasing in reconstruction.
- Comb function (impulse train). Using the property that, as the spacing of impulse train gets larger in space, it gets narrower in frequency. 
- Sampling is just multiplying a continuous signal by a discrete comb. And if the distance in original comb is M, the distance in its fourier is 1/M. So, by using the graph in Fourier transform within range 2/M, we can accurately reconstruct original graph.
- An image to an electrical engineer is usually processed in frequencies, but computer scientists usually think of images as data structures instead of signals.