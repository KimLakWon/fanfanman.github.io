---
layout: post
title:  "Computer Vision Note 3"
date:   2017-05-25 14:25:00 -0500
comments: false
categories: computervision
tags: 
---

### Lesson 2A-L6 Edge detection: 2D operators
- For a derivative operator, larger sigma of the operator will generate sharper edges and larger-scale edges
- Primary edge detection steps: (how we convert gradient to edges) 1. smoothing derivatives to suppress noise and compute gradient; 2. threshold to find regions of significant gradient; 3. thin to get localized edge pixels; 4. link or connect edge pixels.
- Canny edge operator: 1. filter image with derivative operator; 2. find magnitude and orientation; 3. non-maximum suppression: thin multi-pixel wide 'ridges' down to single pixel width; 4. linking and thresholding: define two thresholds: low and high, use the high threshold to start edge curves and the low threshold to continue them.
- Non-maximum suppresion: because thresholding usually cut out the gaussian curves above threshold, generating a thick edge. we need to check if pixel is local maximum along gradient direciton. Problem with this: pixels along edge didn't survive the thresholding.
- Canny threshold hysteresis: Apply a high threshold (during thresholing step) to detect strong edge pixels, link thoese strong edge pixels to form strong edges. Then apply a low threshold to find weak but plausible edge pixels and extend the strong edges to follow weak edge pixels.
- Useful code:
```matlab
img = imread('imagename.png');
imshow(img);
imggray = rgb2gray(img);
imgedge = edge(imggray, 'canny'); % canny edge operator
imshow(img1gray & img2gray); % to view common pixels
doc edge; % for help doc
```
- single 2d edge detection filter: laplacian operator (1d: derivative of gaussian (smoothing operator))

### Lesson 2B-L1 Hough transform: Lines
- Parametric Model: A parametric model can represent a class of instances where each is defined by a value of the parameters, such as lines, or circles, or even a parameterized template.
- Example of parametric model fitting: line fitting.
- Difficulty of line fitting: Extra edge points (clutter), multiple models; Only some parts of each line detected, and some parts are missing, noise in measured edge points. So it's hard to convert edges to lines
- Solution: Voting - Voting is a general technique where we let the features vote for all models that are compatible on it. 1. Cycle through features (edge points), each casting votes for model parameters; 2. Look for model parameters that receive a lot of votes.
- Hough transform: a voting techinique that can be used to fit lines. The main idea is: 1. each edge point votes for compatible lines; 2. look for lines that get many votes.
- The key to Hough transform is hough space. For example, line representation is y = mx + b, and we put m and b into Hough (parameter) space which is two dimensional plot of (m, b). Then a line in the image corresponds to a point in Hough space. And a point in image space correspondds to a line in Hough space. Then we loop through all points and find the grid in Hough space who has most intersections of lines.
- In order to avoid vertical lines which are difficult to represent, we use polar representation of lines. In solar representation, a point in image space is now a sinusoid segment in Hough space, xcost - ysint = d.
- A Hough accumulator array is used to keep the votes.
- Basic Hough transform algorithm: 1. Intitialize H[d, theta] = 0; 2. For each edge point in E(x, y) in the image, for theta = 0 to 180: d = xcostheta - ysintheta, H[d, theta] += 1 (which gives you a graph of sinusoids); 3. find the values of (d, theta) where H[d, theta] is maximum; 4. the detected line in the image is given by d = xcostheta - ysintheta.
- Algorithm analysis: space complexity: k^n (n dimensions, k bins each). time complexity: constant times edge points.
- Useful code: 
```
[assum theta rho] = hough(edges); % hough function
figure, imagesc(accum, 'XData', theta, 'YData', rho), title('Hough accumulator');
peaks = houghpeaks(accum, 100);
hold on; plot(theta(peaks(:, 2)), rho(peaks(:, 1)), 'rs'); hold off;
linesegs = houghlines(edges, theta, rho, peaks);
peaks = houghpeaks(accum, 100, 'Threshold', ceil(0.6*max(accum(:))), 'NHoodSize', [5 5]); % more precise lines
```
- Extensions - using the gradient. In the algorithm above, instead of looping through all possible thetas, we set theta = gradient at (x, y), which will reduce the time hugely.
- Extension 2: give more votes for stronger edges
- Extension 3: change the smapling of (d, theta) to give more/less resolution

### Lesson 2B-L2 Hough transform: Circles
- For a fixed radius r, unknown gradient direction: any point on the circle with function (x-a)^2 + (y-b)^2 = r^2 could be converted to a circle with radius r locating at xi and yi in Hough space (a, b).
- For unknown radius r, no gradient: a point on circle in image space can be converted to a cone in Hough space (r, a, b).
- For unknown radius, with gradient: gradient points perpendicular to radius, a point on circle in image space can be converted to a line in Hough space (r, a, b).
- Voting pratical tips: minimize irrelevant tokens first; choose a good grid
- Pros: All points are processed independently, so can cope with occlusion; some robustness to noise; can detect multiple instantces of a model in a single image.
- Cons: Complexity of search time increases exponentially with the number of model parameters; quantization: hard to pick a good grid size.