# Fitting Dose Response Curves

Author: Harvey Motulsky  
Date: 2002  
Website: www.graphpad.com

## What is a dose-response curve

X-axis: concentration of a drug or hormone.  
Y-axis: response (any measure of _biological function_)

1. **Agonist**: a drug that binds to a receptor and cause a response.

    * _full agonist_: a drug that appears able to produce the _maximum_ cellular or tissue response.
    * _partial agonist_: a drug that provokes a response, but the maximum response is _less than_ the maximum response to a full agonist in the _same_ cell or tissue.
    * _inverse agonist_: a drug that reduces a pre-existing basal response that is due to constitutive activation of a system in the absence of other ligands.

2. **Antagonist**: a drug that does **not** provoke a response itself, but **blocks** agonist-mediated responses.

## Standard shape of dose-response curve

Typically we use log(concentration) as X-axis and the shape of standard curve is _rectangle hyperbola / sigmoid curve_.  
It doesn't matter whether the drug provokes receptor directly or there are some intermediate steps (like second messengers).  
A standard dose-response curve is defined by 4 parameters:

* **Bottom**: the baseline response;
* **Top**: the maximum response;
* **Hill slope**: the slope;
* **EC-50-**: the drug concentration that provokes a response halfway between baseline and maximum.

## The "Hill equation" (Four-parameter logistic equation, variable slope sigmoid equation)

$$$Response=Bottom+\frac{Top-Bottom}{1+\frac{EC_{50}^{HillSlope}{[Drug]^{HillSlope}}}}$$$