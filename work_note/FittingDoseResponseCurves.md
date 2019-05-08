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

## Models for fitting dose-response curve

### 1. The "Hill equation" (Four-parameter logistic equation, variable slope sigmoid equation)

$Response = Bottom + \frac{Top - Bottom}{1+\frac{EC_{50}^{HillSlope}}{[Drug]^{HillSlope}}}$

* If define: $X=log10([Drug])$
The function becomes:
$Response=Bottom+\frac{Top-Bottom}{1+10^{(logEC_{50}-X)HillSlope}}$

* If define: X as concentration of drug
THe function becomes:
$Response=Bottom+\frac{Top-Bottom}{1+10^{(\frac{EC_{50}}{X})HillSlope}}$

### 2. Five-parameter logistic equation

#### logistic

$f(x) = c + \frac{d-c}{(1+\exp(b(x - e)))^f}$

#### log logistic

$f(x) = c + \frac{d-c}{(1+\exp(b(\log(x)-\log(e))))^f}$

#### log logistic2

$f(x) = c + \frac{d-c}{(1+\exp(b(\log(x)-e)))^f}$

## Questions before fitting a curve

1. Choose Hill slope of 1 or variable slope?  
Large data size: variable;  
limited data size: 1
2. Set _Top_ to a constant value?
If your data **can't** define the top plateau of curve very well, then you might need to make _Top_ value constant.
3. Set _Bottom_ to a constant value?
If your data **can't** define the bottom plateau of curve, then you will make the bottom plateau be a constant **based on controls**. If you have subtracted a background value, then the bottom plateau of curve must be 0.

## Questions after fitting a curve

1. Is the logEC50 reasonable?
The EC50 should be near the **middle** of the curve, with at least several data points on either side of it.
2. Are the standard errors too large? Are the confidence intervals too wide?
The SE of the logEC50 should be **less than 0.5 log unit**.
3. Is the value of _Bottom_ reasonable?
    * Bottom should be **near the response you observed with zero drug**.
    * If the best-fit value of _Bottom_ is **negative**, consider fixing it to a constant value equal to **baseline response**.
4. Is the value of _Top_ reasonable?
    * _Top_ should be near the **response you observed with maximal concentration drug**.
    * If the best-fit value of _Top_ is not reasonable, consider fixing it to a constant value.
5. If you used a variable slope model, are there **enough data** to define the slope?
    * Make sure there are at least a few data points **between 10 and 90%**.
    * If not, consider fixing the slope to its standard value of 1.0.
6. If you used a model with a Hill Slope of 1, does the data appear to be steeper or shallower?
If the fitted curve apparently differ from original curve, consider using a variable slope.
7. Does the curve appear to be biphasic or non-sigmoid?
Change to a more complicated model.

## Advanced analyses of dose-response curve

### The pEC50

**pEC50**: the negative logarithm of the EC50.  
The function for fitting pEC50:
$Response = Bottom + \frac{Top - Bottom}{1 + 10 ^ {{(X - pEC_{50})HillSlope}}}$

## Calculating an EC value from the EC50 and Hill Slope

Let:
$F$: any fractional response you want;
$EC_F$: the agonist concentration necessary to achieve $F$% response.
$H$: the Hill Slope

The equation:
$EC_F=(\frac{F}{100-F}^{\frac{1}{H}}) \times EC_{50}$

## Calculating an EC value from fitting curves

Fitting the model:
$F= 80$
$LogEC_{50} = logECF - (\frac{1}{H} \times log(\frac{F}{(100 - F)}))$
$Y = Bottom + \frac{(Top - Bottom)}{1 + 10 ^ {(logEC50-X)Hillslope}}$

## Bell-shaped dose-response curve

### Combine two sigmoid equations

$ Y = Dip + \frac{(Plateau_1 - Dip)}{1 + 10 ^ {(logEC_{50}1 - log[A])n_H1}} + \frac{(Plateau_2 - Dip)}{1 + 10 ^ {(log[A]-logEC_{50}2)n_H2}}$

Equations in R:

```R
Span1 = Plateau1 - Dip
Span2 = Plateau2 - Dip
Section1 = Span1 / (1 + 10 ^ ((log(EC50_1) - X) * nH1))
Section2 = Span2 / (1 + 10 ^ ((X - log(EC50_2)) * nH2))
Y = Dip + Section1 + Section2
```

#### Consideration before fitting

* There should be enough observation for fitting model
* Be careful about the sign of _nH_, which determine the shape of "bell" (up-down or vice versa)

### Gaussian distribution equation

If the data size is not enough for fitting the model above. Gaussian distribution could be considered.

Equations:
$ E = Basal + Range \times e ^ {-[\frac{10^{log[A]}-midA}{slope}]^2}$
$ midA = logEC_{50} + slope\sqrt{-ln(0.5)}$

Equations in R:

```R
midA = log(EC50) + Slope * sqrt(-ln(0.5))
Y = Basal + (Range * exp(-1 * ((X - midA) / Slope) ^ 2))
```

Advantages: Require smaller set of data

Disadvantages: The symmetric nature of Gaussian curve,

* may gives out wrong EC50.
* may not fit the complete dataset that fully defines both phase of bell-shape (which is not symmetric)

## Biphasic dose-response curves

Equation:
$Y = Bottom + \frac{(Top - Bottom)Frac}{1 + 10 ^ {(logEC_{50}1 - log[A])n_H1}} + \frac{(Top - Bottom)(1 - Frac)}{1 + 10 ^ {(logEC_{50}2 - log[A])n_H2}}$

Equations in R:

```R
Span = Top - Bottom
Section1 = Span * Frac / (1 + 10 ^ ((log(EC50_1 - X) * nH1)))
Section2 = Span * (1 - Frac) / (1 + 10 ^ ((log(EC50_2 - X) * nH2)))
Y = Bottom + Section1 + Section2
```