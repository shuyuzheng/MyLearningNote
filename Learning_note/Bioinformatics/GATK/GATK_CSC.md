# Sequencing data introduction

## Sequencing

1. Each flowcell containing lanes (independent to each other)
2. Each lane contain multiple samples
3. Read group (RG) specifies a **combination** of sample and flowcell

## Fastq data

* Sequence Name (read name, group)
* Sequence
* `+` 
* Sequence quality

1. Whole genome sequencing data
2. Exome sequencing data (gene panels)
  * Only interested regions. (exons)
  * More duplicated fragments (reads)
  * Using chip, designed by base size

## Quality control (sequencing data)

* poor target coverage
* High proportion of chimerism. Caused by bad library design. DNA contaminant like Bacterial, animal or other species. They are likely to be in the soft clip area.(by using special filter, GATK has such tools) Different parts of reads recombined together into one read.
* Strange insert size distribution
* Shearing-based oxidation. poor OxoQ value
* Library is too small.

Exome
* Severe unevenness in distribution of coverage (Fold80 penalty value)
* HS/reference bias base oxidation (poor cref-OxoQ value)

Genome

1. GC content
2. Cover envenness: It is assumed that the coverage should be uniform among target regions.

## Data pre-processing

Things might influence the alignment:
* truncation region
* artificial duplication
* natural duplication(can be solved by paired-end read)


triming: 
quality triming is not necessary, as some algorithms will use the information of quality, deleting low quality regions will loss these information.
adapter trimming: Adapter have been marked and will be ignore in the processing.

Unmmapped BAm: sequence info and mate data information. Compare to fastq.


### Marking duplicates
Marking duplicates across multiple lanes or sample. (When using same library)
Batch effect: not change the aligner within one cohort. Reprocess everything with same pipeline. Functional equevalent pipeline.

Graph based variant calling

Reduce bam not recommend, use CRAM is suggested.

Library duplicate, optical duplicate.

realignment will not be used any more as other steps will do it, like Haplocaller.

### Base recalibrate

BQSR does not delete base. It correct base quality and modify the confidence of the base value.
Based on dbsnp database.
1. move out non variant. Not used in cancer. There is another database for cancer mutation.

## Variant calling

Hg38 improvement:
* Better account for population diversity
* Enable detection of complex variants
* Reflect copy number & pseudo 

Germline:
SNPs and INDELs: HaplotypeCaller GVCF
CNV: GATK gCNV
Structure variant: GATK SVDiscover

Somatic:
MUTECH2
another workflow.

### Germline

Single genome in isolation: almost never useful
Family or population data add valuable information. Joint-call across all sample.
  * rarity of variants
  * de novo mutations
  * ethnic background

new pipeline: Germline CNVs + SVs

## Somatic

Key challenges: tumor heterogeneity and contamination. No prior knowledge about variants in tumor.

1. Matched normal to subtract germline background

2. Panel of Normal to subtract systematic noise

joint calling is not able in somatic variant calling now. Joint calling require that the variant appears in many samples. 



## Germline Variant Discovery

Calling variant with HaplotypeCaller:
1. Identify ActiveRegions
2. Assemble plausible haplotypes
3. Determine per-read likelihoods (Pair-HMM)

Do joint variant calling:
1. Run HaplotypeCaller each sample once and get gVCF file
2. Combine gVCF files to do the **joint variant calling**

Filter variant
Combine multiple resources together (ML to figure out threshold)

Fuctional annotation predicts effects of variants

The highlight of variant calling research. Joint calling, filter variant, very few data(like single cell sequence. Now have Neural network method to do that). Hail using Spark (https://blog.cloudera.com/blog/2017/05/hail-scalable-genomics-analysis-with-spark/)

Call variant from long reads. Packbio 

Single cell RNAseq

Keep the analysis method consistent to all data. Sometimes it's necessary to use old version pipeline until new version has been changed so large.

google deep learning sequence analysis tool

## Somatic variant calling

Driver mutation
Passenger mutation

Tumor purity= $\frac{tumor cells}{normal + tumor cells}$

Tumor heterogeneity is based on polygenomic populations, segregated or intermixed, due to ongoing subclonal evolution.

1. General factors: Sample prep artifacts, sample swaps, depth limitation, batch effect, mapping artifacts, cross-sample contamination, sequencing artifacts
2. SOmatic specific: Purity; Tumor heterogenety; Mutation types: CNAs, SVs(>100bp), SNVs and indels (<100bp), chromothripsis, aneuploidy, LOH(loss of heterozygosity).


### Panel of Normals for SNVs and Indels

VCF of calls made from a set of unrelated "normal" samples

Eliminate common/recurring technical artifacts
eliminates germline variants not called in the matched normal (or approximates the normal if none is available)

Using panel normals allows you to eliminate artifact in the experiment.

pool sequencing: try somatic calling


### Somatic CNV

It's all about coverage and normalization

get the average coverage along whole genom and compare the coverage at each location with the average coverage.

### Panel of Normals for CNVs

Made from a set of unrelated "normal" samples

Denoising to compensate for variability in coverage > should use normals made using the same data generation techniques.


