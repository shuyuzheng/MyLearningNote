# Variant effect Prediction

## 1. DNA variants

## 2. Potential consequences of variant

### 2.1 RNA level
1. Change of encoded protein
  1. codon changes: be careful with more than variants occur in one codon (combination of variants will change the AA that substituting the original one).
  2. Influence translation speed
  3. Fusion RNA
    * From specific rearrangements (translocation)
    * consider when 3' end gene missing
      * transcription needs to end somewhere
      * deletion might be in upstream gene
    * in general deleterious consequences
2. Affecting processing
  1. Transcription initiation
    * variants at: different promoter / first exon
    * Involves: stability
  2. Capping
    * Add 5' cap immediately after transcription starts
    * Block 5' end with 7-methylguanosine
    * Function:
      * Prevent degration (by exonucleases)
      * Regulation nuclear export
      * Promote translation (loops with polyA)
  3. Splicing
    * Regulators
      * Standard signals:
        * splice donor (GT)
        * splice acceptor (AG)
        * branch point (A)
      * exonic
        * ESE: exonic splice enhancer
        * ESS: exonic splice silencer / ESR: exonic splice repressor
      * intronic
        * ISE: intronic splice enhancer
        * ISS: intronic splice silencer
    * variants at: inclusion/exclusion exons
    * Involves: encoding different proteins
  4. Poly A addition
    * Add poly A-tail at 3' end of many transcripts
    * One gene often have several 3' ends
    * Function:
      * Prevent degradation (by exonucleases)
      * stability
      * influnences translation
    * Variants at: last exons / polyA sites
    * Involves: stability of RNA
3. Change in stability
  * less stable (NMD)
  * more stable
  * folding (hairpin structures)
4. change in interactions
  * binding other molecules (miRNA, proteins)
  * change in cellular localisation (altered traffickin, subcellular localisation)
### 2.2 Protein level

## 3. Calling DNA variants (SNV, SV, and CNV)

## 4. Rules of reporting sequence variants (HGVS nomenclature)

It would be better to learn the web documentations than PPTs: http://varnomen.hgvs.org/

## 5. Genetic databases

### 5.1 Warning for searching databases

1. Use common sense
  * Why?
    * Databases do **not** replace lack of background knoledge
    * Most databases have **not** been developed and certified for _diagnostic use_
    * Information can be **incorrect** due to automatic _updates_ or _errors_ on data-entry
    * Search options may always return results
    * Clear manuals without errors are **rare**
  * How?
    * Are the results within expectation? 
      * Are they using the _same reference sequences_ as you used?
      * How was the _genome built_?
    * Consider the purpose of the database and its options
    * Website functionality may work in _specific browsers_ only
    * Troubleshooting: See **Help** or **FAQ** files
2. Nonsense in = nonsense out

### 5.2 When shell we use the genetic databases?

1. NGS variant data interpretation
2. Clinical report (Relevant information from databases):
  1. Gene associated with patient phenotype?
  2. Variant causes disease phenotype?
  3. Risk assessment
  4. Which treatment options exist?

### 5.3 Genetic databases 

Reference: [RehmHL et al. N EnglJ Med 2015;372:2235-2242](https://www.nejm.org/doi/full/10.1056/NEJMsr1406261)

1. There are many different variant databases
  * Different types of information
  * Varying quality
2. Variant annotation
  * Functional effect prediction: difficult
3. Strategy for identification of variants
  * Be careful when _excluding_ variants in dbSNP and frequency databases
  * dbSNP: now contains somatic and disease-causing variants
  * Frequency databases: non-penetrant disesse-causing variants
4. Discriminate between somatic and germline variants
  * Some combinationof germline variants are lethal, but may occur in specific (cancer) tissues

### Data for evaluationof genetic variants

1. Variant information at DNA, RNA and protein level per gene
2. Variant allel (homozygote, maternal, paternal)
3. Detection techniques and material tested
4. Results functional tests
5. Variants co-occuring or observed together (which combinationof vatiants cause disease?)
6. Case-control (Numbers of affected and healthy carriers, healthy controls)
7. Frequency of variants in the population (Minor allele frequency: MAF)
8. Variant classification (clinical relevance?)

### Some databases

1. **ClinGen**: number of observations per variant
  * Class 3-5 variants in 15,000 patients with hereditary disorder
  * Most disease-causing variants are rarely observed
2. **GoNL**: variants in the Dutch population
  * Removal/ annotation of frequent variants in Dutch patients
  * No phenotype information
3. genomeAggregationDatabase (**gnomAD**): http://gnomad.broadinstitute.org
4. **Ensembl**
  * http://www.ensembl.org/Tools/VEP
  * VEP-Video https://www.youtube.com/watch?v=rSIG_OVzyLU
5. **ClinVar**: integrates 4 domains of information https://www.ncbi.nlm.nih.gov/clinvar
  * Variation: dbSNP, dbVar, Gene
  * Phenotype: MedGen (HPO, OMIM)
  * Interpretation: ACMG, Sequnce Ontology
  * Evidence: PubMed, GTR
6. **HCMD**: Human Gene Mutation Database www.hgmd.org
8. **OMIM**: Human gene information database http://omim.org/
9. **dbSNP** https://www.ncbi.nlm.nih.gov/snp
10. Cancer relevant databases: 
  * An article reviewed those databases https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5707196/
  * **COSMIC** catalogue of somatic mutations in cancer https://cancer.sanger.ac.uk/cosmic
11. Gene variant database lookup: modify url as: http://Gene_symbol.lovd.nl

### Describing information from databases and tools in your documentation

1. **URL** and **date** of visit
2. **Database-IDs** of records with information
3. **Version numbers** of database releases and software
4. Version number of **HGVS nomenclature** used by databases or tools
5. Accession numbers and version numbers of **reference sequences** and **genomes**
6. Local references, legacy nomenclature systems
7. References of **publications** used (PMID, DOI)

### Intro of some databases

#### 1 Human Phenotype Ontology (HPO)
##### 1.1. Introduction to HPO
It provides relationships between:

* Gene annotation: OMIM, Orphant or AII
* Disorder: OMIMI
* HPO-terms: the standardized clinical terminology
##### 1.2. Applications using HPO
1. Capturing patient clinical data in HPO format: 
  * [PHENOTIPS](https://phenotips.org/)
  * [Patient archive](http://patientarchive.org/#/home)
  * [Face2Gene](https://face2gene.com/)
2. Using HPO-profiles in variant-disease interpretation integrated in commercial software:
  * FDNA: Face2Gene.
  * CartageniaBENCH
  * GEPADO –Software Solutions for Genetics –GmbH•BioDiscovery’sNxClinical
  * Diploid: Diagnosing rare diseases: Moon
  * Centogene
  * SimulConsult
  * Fabric Genomics
  * Qiagen
  * Congenica
3. Phenotype matching tools
  * PhenomeCentral(phenotype/genotype matching) https://www.phenomecentral.org/ 
    * HPO-based semantic similarity patient phenotypes
    * Genotypic & phenotypic matching of cases
    * Matching with casus from connected databases (Matchmaker Exchange)
#### 2. Variant Effect Prediction (Ensembl)

#### 3. Leiden Open Variant Database (LOVD)
https://www.lovd.nl/
## 6. Protein variants prediction

## 7. Variant annotation


## 8. Variant classification (ACMG recommendations)

## 9. What may go wrong in VEP

## 10. Lab testing for validation

## 11. Future development
