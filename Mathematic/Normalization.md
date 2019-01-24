# Normalization:
## 1. Normalization of ratings
It means a adjusting values measured on different scales to a notionally common scale, often prior to averaging.
## 2. Adjusting probability distributions into alignment
In more complicated cases, normalization may refer to more sophisticated adjustments where the intention is to bring the entire **probability distributions** of adjusted values into **alignment**.
## 3. Normalization of scores
 In educational assessment, there may be an intention to align distributions to a **normal distribution**.
## 4. Quantile normalization
   The **quantiles** of the different measures are brought into alignment.Quantile normalization is frequently used in microarray data analysis. It is was introduced as     **quantile standardization** and then renamed as **~**. 
   * To quantile-normalize a test distribution to a **reference distribution** of the same length:
     1. sort the test distribution and sort the reference distribution. 
     2. The highest entry in the test distribution takes the value of the highest entry in the reference distribution and then the second highest one ...
     3. Generally, a reference distribution will be one of the standard statistical distributions such as the _Gaussian distribution_ or the _Poisson distribution_. The reference distribution can be generated randomly or from taking regular samples from the __cumulative distribution function_ of the distribution.
   * To quantile normalize **two or more distributions** to each other, without a reference distribution, sort as before, then set to the average(usually, arithmetic mean) of the distribution: The highest value in all cases becomes **the mean of the highest values**, the second highest value becomes the mean of the second highest values, and so on.
## 5. Usage1. In another usage in statistics, normalization refers to **the creation of shifted and scaled versions of statistics**, where the intention is that these normalized values allow the comparison of corresponding normalized values for different datasets in a way that eliminates the effects of certain gross influence, as in an anomaly time series.
2. Some types of normalization involve only a **rescaling**, to arrive at values relative to some size variables.In terms of levels of measurement, such ratios only make sense for _ratio measurements_(where ratios of measurements are meaningful), not _interval measurements_(where only distances are meaningful, but not ratio).
4. In theoretical statistics, parametric normalization can often lead to **pivotal quantities** - functions whose sampling distribution dose not depend on the parameters - and to **ancillary statistic** - pivotal quantities that can be computed from observations, without knowing parameters.
## 6. Some of common used normalization
1. **Standard score**
    $$\frac{X-\mu}{\sigma}$$
    Normalizing errors when population parameters are known. Works well for populations that are normally distributed.
2. **Student's t-statistic**
    $$\frac{X-\overline{X}}{s}$$
    Normalizing residuals when population parameters are unknown(estimated).
3. **Studentized residual**
    $$\frac{\hat{\epsilon}_i}{\hat{\sigma}_i} = \frac{X_i-\hat{\mu}_i}{\hat{\sigma}_i}$$
    Normalizing residuals when parameters are estimated, particularly across different data points in regression analysis.
4. **Standardized moment(力矩？)**
    $$\frac{\mu_k}{\sigma_k}$$
    Normalizing moments, using the standard deviation $\sigma$ as a measure of scale.
5. **Coefficient of variation**
    $$\frac{\sigma}{\mu}$$
    Normalizing dispersion, using the mean $\mu$ as a measure of scale, particularly for positive distribution such as the _exponential distribution_ and _Poisson distribution_
6. **Feature scaling**
    $$X' = \frac{X-X_{min}}{X_{max}-X_{min}}$$
    Feature scaling is used to bring all values into the range[0, 1]. This is also called unity-based normalization.This can be generalized to restrict the range of values in the dataset between any arbitrary points a and b using  $X' = a + \frac{(X - X_{min})(b-a)}{X_{max}-X_{min}}$
