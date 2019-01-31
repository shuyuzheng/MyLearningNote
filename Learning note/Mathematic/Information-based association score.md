---
title: "Information-based association metric (RNMI)"
author: Shuyu
date: 25 Sep, 2018
output: word_document
---
# Information-based association metric(RNMI)
This quantity is obtained by estimating the differential mutual information between the radiation response profile and each of the gene set's genetic profiles (ssGSEA, fSCNA, ... )and then normalizing and rescaling it so that it is defined from zero(no association) to one (perfect association).

**Method**:
1. The differential mutual information:
$$I(x, y) = \int\int dx dy P(x, y) log_2 \frac{P(x, y)}{P(x)P(y)}$$
Using a **kernel-based method** which places a Gaussian density centered at each data point and a **width** determined by a biased **cross-validation estimate**.
2. Normalization of mutual information:
$$ D(x, y) = 1 - \frac{I(x, y)}{H(x, y)} = \frac{H(x)+H(y)}{H(x, y)}$$
using the **joint entropy** to better account for the intrinsic difference in entropy associated with each single-sample genetic profiles.
3. Rescaling the normalized mutual information using the value of the metric for the radiation response profile against itself.
$$M(x, y) = \frac{I(x, y)}{H(x, y)} = \frac{H(x) + H(y)}{H(x, y)} -1$$
4. Providing directionality to the metric, a "sign" to each profile's RNMI according to the sign of the correlation coefficient.
$$N(x, y) = sign(\rho(x, y)) \frac{M(x,y)}{M(x, y)}$$
5. The nominal p-values for the information-based association metric scores between the gene sets/pathways and radiation response scores were estimated using 
**Advantages**:
Increasing sensitivity to non-linear relationships and better resolution at the high end of the matching range.
