## Coding sequence affect the protein' structure

* Silent, same amino acid: no effect on structure
* Nonsense, stop condons: usually clear effect on structure, truncation
* indels: effect depends on the location
* frameshift
* missense: effect vary, easiest for automatic analysis

## Position of the mutations

* Active site 
  * often in Uniprot
  * 100% conservation
  * often lethal
  * can not do their work
* Binding site/pocket: 
  * can not interact with substrates.
  * affecting any type of interactions:
    * with DNA
    * metal
    * co-factors
    * lipids
    * other proteins
    * etc
* Core of protein: help protein to be stable and folded.
* Functional site: PTM sites, signal peptide, metal contacts
* Surfave in dimerization sites: can not assemble
* Surface of a membrane protein: can not inset to membrane.
* Surface without known function: but might be functional.
* Very specific mutations: like X>Pro in helix, change in hydrophobicity pattern in strand, helix-capping

## Analyze effect of mutations on the protein structure

1. Find the sequence of protein
2. Find information about the function of residues of interest (Uniport)
3. Map this information where possible on the available proteins structures
4. Analyze what would happen to the function of the residue when it mutates into the new residue

Find 3D-structure of Protien

1. Take the Amino acid sequence
2. BLAST against the **PDB**
3. Analyze the results, you have 3 options:
  * Solved 3D-structures: structure exists and download directly;
  * Modelling templates: found a homology, build a **homology model**
    * steps:
      * take a known structure to predict back bone
      * Copy backbone and conserved residues
      * Add side chains, Molecular, dynamics simulation on model
  * NO structural information: use sequence-based predictions
    * Basic assumptions:
      * Structure defines function
      * During evolution structures are more conserved than sequence
    * Things can be predicted from sequence alone
      * Transmembrane regions
      * Secondary Structre
      * Accessibility
      * Domains
      * Motifs such as signal peptides/localisation signals
      * Conservation (using Multiple Sequences)
      * Disordered regions
    * Disorder prediction:
      * difficult to predict
      * tools: KMAD, Disopred, PsiPred, Globplot, PreDisorder, etc
4. Using existing and predicted protein:
  * Understand protein localization
  * Understand protein function
  * Design intelligent experiments
  * Study the effect of mutations

## Variant effect predictor

* Input type:
  * Protein level: KD4v, using Uniprot accession code
  * Geneomic level: mutationTaster: asks for ORF/cDNA or gene
  * Other: PolyPhen-2 (most popular), HOPE, CUPSAT, Align-GVGD, SDM, CRAVAT(expensive server), wANNOVAR, Phen-Gene

* Method:
  * testing
  * benchmarking

* Results

