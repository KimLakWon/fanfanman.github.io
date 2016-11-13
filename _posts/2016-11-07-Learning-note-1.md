---
layout: post
title:  "Computer Graphics Learning Note 1"
date:   2016-11-07 13:00:00 -0500
comments: false
categories: jekyll update
tags: RayTracing
---

- Learning material is from [DukeCS 344](https://www.cs.duke.edu/courses/compsci344/spring15/){:target="_blank"}. And, a schedule is recorded [here](../../../2016/11/07/Starting-to-learn-computer-graphics.html){:target="_blank"}.
- PPTS are [Overview](https://web.ics.purdue.edu/~zhan2600/assets/dukecs344/01intro.pdf){:target="_blank"}, [Intro to Raytracing](https://www.cs.duke.edu/courses/compsci344/spring15/classwork/02_raytracing/){:target="_blank"}, [Ray Tracing Tutorial](http://www.siggraph.org/education/materials/HyperGraph/raytrace/rtrace0.htm){:target="_blank"}.

---

## Overview
- Problems in graphics
     - 2D imaging: compositing and layering, digital filtering, color transformations
     - 2D drawing: illustration, drafting, text, GUIs
     - 3D modeling: representing 3D shapes, procedural modeling
     - 3D rendering: 2D views of 3D geometry, projection and perspective, remove hidden surfaces, lighting sumulation
     - Interaction: 2D graphical user interfaces, 3D modeling interfaces, virtual reality
     - Animation: keyframe animation, physical simulation
- In one sentence: How to use computer to draw as real as possible and maximize production.

## Intro to Ray Tracing
- Purpose: use ray tracing to simulate 2D lighting images.
- A simple illustration: ![Raytracingalgorithm](http://web.ics.purdue.edu/~zhan2600/assets/dukecs344/raytracingalgorithm.png).

## Ray Tracing Tutorial
- Principle: like scan-line graphics, ray tracing is a point sampling algorithm. We sample a continuous image in world coordinates by shooting one or more rays through each pixel, and the pixel is then set to the color values returned by the ray.
- Example: in a simple example of a ball on a plane, there are basically four types of lighting modes. Background mode, shadow-on-bkg mode, illuminated-by-bkg-on-ball mode, and normal ball mode. ![Illustration](http://web.ics.purdue.edu/~zhan2600/assets/dukecs344/raytracingill.gif)
- Complicated examples: In complicated models where there are more than one light sources and objects, it'd be better if we construct a tray tree, because there will be several reflected lights among objects. The reflective and/or transimitted rays are continually generated until the ray leaves the scene without hitting any object or a preset recursion level has been reached. Then we can modify local illumination model by a combination of reflected rays and transmitted rays at each tree node.
