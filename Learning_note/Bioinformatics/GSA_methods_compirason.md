* focused gene set testing:
    * interest focuses on one or more gene sets of special relevant to the experiment at hand
    * each set is evaluated on its own terms
    * Evaluate P-values by permuting samples or permuting genes
    * Examples:
        * ROAST
* battery gene set testing: 
    * a large database of gene set is evaluated on a microarray dataset to see whether any sets stand out from the other.
    * Sets are evaluated relative to the other sets in the database.
    * Examples: 
        * Gene Set Enrichment Analysis (GSEA)

# Over-Representation Analysis(ORA)

## Method

Statistically evaluates the fraction of genes in a particular pathway found among the set of genes showing changes in expression.
1. Generated a gene list using a certain threshold or criteria (e.g. Genes differentially expressed in given condition)
2. Test the interested gene set and input gene list by using "2 x 2 table method" (based on hypergeometric, chi-square, or binomial distribution) to do the test.

## Limitations
1. Only the number of genes is considered. The useful informations in the data, like prob intensities, are ignored. Though you can assign weights to genes according to fold-change, significance of a change ...
2. Some valuable genes might be lost when generating gene list.
3. It assumes that the genes are independent to each others and ignore the correlation structure between genes.
4. It assumes that the pathways are independent to each others.

#  Functional Class Scoring (FCS) Approaches

## Assumption

Although large changes in individual genes can have significant effects on pathways, weaker but coordinated changes in sets of functionally related genes can also have significant effects.

## Method
1. A gene-level statistic is computed using the molecular measurements. 
    1. Computing differential expressiong of individual genes or proteins. 
    2. Gene-level statistics (correlation of molecular measurements with phenotype, ANOVA, Q-statistic, signal-to-noise ratio, t-test, Z-score.)
    3. Transformed gene-level statistics.

#GSEA

## Method

1. Calculate enrichment score: The degree to which a set S is overrepresented at the extremes(top or bottom) of the entire ranked list L.
    1. Walking down the ranked list L
    2. Increase a _runing-sum statistic_ when encountering a gene in S
    3. Decrease the _runing-sum statistic_ when encountering a gene _not_ in S
    4. The _enrichment score_ is the maximum deviation from zero encountered in the random walk.
    5. It corresponds to a weighted Kolmogorov-Smirnov-like statistic.
2. Estimation of Significance level of ES: empirical phenotype-based permutation test procedure.
    1. Generating the null distribution by permuting the **phenotype labels** and recompute the ES of the gene set.
    2. Calculate the empirical, nominal _P_ value of the observed ES.
3. Adjustment for multiple hypothesis testing.
    1. Normalize the ES for each gene set to account for the size of the set. -> Normalized Enrichment Score (NES).
    2. Control the proportion of false positives by calculating the False Discovery Rate (FDR). It is computed by comparing the tails of the observed and null distributions for the NES.


# ROAST

Publication: [ROAST: rotation gene set tests for complex microarray experiments](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2922896/)

focused gene set testing

# GSVA

1. sample-wise gene set enrichment scores (a function of genes inside and outside the gene set)
2. Estimates variation of gene set enrichment over the samples independently of any class label.
