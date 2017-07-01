---
layout: post
title:  "Computer Vision Note 6"
date:   2017-07-01 17:13:00 -0500
comments: false
categories: computervision
tags: 
---

### Lesson 3A-L1 Cameras and Images
- Up till now, an image is a function, a 2D pattern of intensity values.
- From this lesson, we think of images as 2D projections of 3D points.
- Pinhole camera: we make an aperture on a barrier, so that the projection of object can form a complete graph on the film.
- Instead, we use a lens to make projection in real world. Thin lense theorem: 1/z1 + 1/z2 = 1/f (f = focus)
- Varying focus can change the depth of field to be shown on screen.
- If one needs to blur remote scenes, he needs to enlarge aperture, such that scenes close the image will get blurred, as shown in the following figure ![aperture](https://fanfanman.github.io/assets/udacitycv/cvapertureeffect.png) If there's a scene close to the image, a larger aperture will form a larger image on the screen, which seems blurer. 即光圈大小影响了远景的模糊程度，光圈越大远景越模糊，成像越集中于某一物体。
- Focal length affects how far away can we shoot, which is the field of view, 即焦距大小影响了，我们能拍到的景色的远近，焦距越大，能拍到越远的景物。
- Funny phrase: reality can be a problem, which is a nicer way of saying life sucks.
- In reality, lenses are not perfect, they produce geometric distortion such as pin cushion distortion and barrel distortion.
- In reality, there's also a chromatic abberation resulting from diffraction.
- In reality, there's also a vignetting problem, when some of light leaks between two lenses, resulting in dark areas in images.

### Lesson 3A-L2 Perspective Imaging
- Set up camera coordinate system: x pointing right, y pointing upwards, z pointing into the camera.
- Projection is used to get maths down in finding image position.
- But division by z is non-linear, we need to use homogeneous coordinates, by setting (x, y) to (x, y, 1) and (x, y, z) to (x, y, z, 1).
- And, projection became a matrix multiplication in homogeneous coordinates!
- Parallel lines converge in math in some point called vanishing point.
- Sets of parallel lines on the same plane lead to collinear vanishing points. The line is called the horizon. - two point perspective (两点透视). Which means, by looking for two vanishing points converged from parallel lines, we can figure out the horizon in an image!
- special case of perspective projection: orthographic projection (parallel projection), which is to smash scenes onto the screen.
- Since more maths are coming, fasten your seatbelts.
- Anamorphic images are amazing illusions designed using the pinciples of perspective projection.