---
layout: post
title:  "Computer Graphics Learning Note 2"
date:   2016-11-11 16:22:00 -0500
comments: false
categories: jekyll update
tags: RayTracing
---

Readings are [Intro to Ray Tracing 2](http://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-ray-tracing/raytracing-algorithm-in-a-nutshell){:target="_blank"}, [Lighting PPT](http://web.ics.purdue.edu/~zhan2600/assets/dukecs344/02lighting.pdf){:target="_blank"}.

## Intro to Ray Tracing 2
- The advantage of Ray Tracing: only a few lines to code; disadvantage: time-consuming.
- Mainly consist of two steps: one step to determine whether object is visible, and the other step to shade the points.

## Shading Models
- This lecture [PPT](http://web.ics.purdue.edu/~zhan2600/assets/dukecs344/02lighting.pdf){:target="_blank"} is very informative on shading models.
- Based on geometry, lighting and material, there are several layers of lighting which perfects the simulation.
- 1st layer / Diffuse reflection(漫反射): where light goes everywhere, and shades are colored by object color. This light has already been included in Ray Tracing model.
     - Light reflects equally in all directions
     - View independent
     - Illumination on an oblique surface is less than on a normal one
- 2nd layer / Ambient reflection: don't worry about where light comes from, just add a constant amount of light to account for other sources of illumination.
     - Usually added onto the front surface of oblique objects to reflect illumination.
     - View independent
     - Reflected light strength depends on: diffuse coefficient, illumination from source.
- 3rd layer / Specular reflection(镜面反射): only happens near mirror configuration, usually white, enhances the appearance of object.
     - Usually added onto the front surface of metallic objects to reflect illumination.
     - View dependent
     - bright near mirror configuration
     - Reflected light strength depends on: specular coefficient, light intensity, angle between viewer and mirror direction, air permeation constant.
- Examples of shading models are:
     - Diffuse shading: ![Diffuse shading](http://web.ics.purdue.edu/~zhan2600/assets/dukecs344/diffuseshading.png)
     - Diffuse + Specular shading: ![Diffuse + Specular shading](http://web.ics.purdue.edu/~zhan2600/assets/dukecs344/specularshading.png)
