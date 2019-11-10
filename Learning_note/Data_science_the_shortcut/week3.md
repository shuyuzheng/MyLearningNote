# When to manipulate the data

1. To satisfy the model assumption: normal distribution, unit consistence, 

2. Some dataset can get benefit from __one or more__ transformation.

# Data cleaning

1. Outlier
2. Be careful to the manually archived data.
3. Missing value: mean, mod, compare with other similar dataset, distribution, fancy models, domain specific knowledge.

# Data transformation

1. Feature scaling:
    * Min-max(scaling)
    * Z-score(standardization)
2. Logarithmic and exponential transformations: Change the distribution of data
    * To treat skewed data
    * Square root transformation: for positive values
    * cube root transformation: it's a strong transformation method.

3. Discretization(bucketing)
    * dividing a continuous variable into segments
    * grouping the segments into bins/categories.
    * Methods: equal width, equal frequency
    * Pros and Cons:
        * may reduce the noise and improve the model's accuracy
        * Prone to information loss
    * Usage: age, height, income
    
Category:
    * label encoding
    * one-hot encoding
    * feature hashing: avoid curse of dimensionality.

Textual data:
    * Character normalization: special characters
    * Removing tags (HTML)
    * bag-of-word representation: term frequency-inverse document frequency (TF-IDF)
    * stemming and lemmatization
    * Removing stop-words: a, the, and 

# Feature selection

* Missing value ratio and low variance filter
* High correlation filter
* Feature importance: some specific algorithms
* Backward/forward feature selection/elimination

# Reduce dimensions

* Single Value Decomposition(SVD) 
* PCA
* Linear Discriminant Analysis(LDA): for labeled data. Supervised.

