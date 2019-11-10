The goal of normalization is for differences in normalized read counts to represent differences in true expression.

Given that the actual product of gene expression is never measured, we consider the true expression of a gene to be the amount of mRNA/cell it produces.

Differentially expression (DE) is considered to be the different **quantities of mRNA/cell** for a gene under different conditions. For certain biological experiments, one might be interested in detecting differences in mRNA/transcriptome.

# Problems with raw read counts

1. The number of reads aligned to a given gene in a given sample is generally considered a random variable.
2. The total number of reads can vary across samples.

# Factors should be normalized:

1. Within-sample effects: they affect the comparison of read counts between different genes in a sample.
    * Gene length: the size of mapped genes.
    * GC-content:
2. Between-sample effect: they affect the comparison of read counts between the same genes in different samples.
    * Library size: the total read counts in a sample

**Suggestion**: preforming both types (within-sample and between-sample) normalization methods is necessary.


