# NGS-Genome vatiant analysis

Waild Gharib

2019.04.29

## 1. Introduction (concepts)

### 1.1 Variant

* SNP, a single nucleocide polymorphism. It widely exists general population. A **single base** change.
* INDEL, an insertion or a deletion. A **single** or **multiple** base.
* SNV, a single nucleotide variant. A **SNP** or an **INDEL**, but the change is a single base.
* MNP, a multi-nucleotide variant. **Several consecutive SNPs** in a block
* MNV, a multi-nucleotide variant. **Multiples SNPs and INDELs** as a block.
* Short variations. **MNVs** that are typically **less than 50bp** in length.
* Large-scale variation, Variants that are **larger than 50bp**
* Structural variants. Variations on the **kilobase** scale that involve (one or more) chromosomes.

## How deep should sequence?

To detect somatic variants need more deeper sequence than germline variant.

## Mutations

**Germline mutation**(hereditary mutation): A gene change in body's reproductive cell that becomes incorporated nto the DNA of **every** cell in the body of the **offspring**.

**Somatic mutation**: An alteration in DNA that occurs **after conception**. Somatic mutation can occur in any of the cells of the body **except the germ cells**. These alterations can _but do not always_ cause cancer or other diseases.

## Mapping

* Popular algorithm
BWA, Bowtie

* RNAseq
Tophat, STAR(memory intense)

Recalibrate Base Quality Scores: As the quality 

Drawback of GATK germline pipeline:
* Memory consuming. 
* False positive rate is high. 

