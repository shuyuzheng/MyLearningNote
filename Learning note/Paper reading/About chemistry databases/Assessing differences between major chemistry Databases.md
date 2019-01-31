---
title: "Caveat Usor: Assessing Differences between Major Chemistry Databases"
author: Shuyu
date: 2018.10.30
output: 
    word.document:
        path: "C:\Users\shuyu\database comparison.docx"
---

Journal: ChemMedChem | PubDate: 2018 | DOI: 10.1002/cmdc.201700724

# 1. PubChem
## 1.1 Growth
* Growth since 2005 shows an approximately **linear** increase in just over a decade.(why linear not exponential?)
    * global output over this period was related to the number of chemists making compounds.

* Now approaching **95 million** distinct chemical structures.
* Features:
    1. **Submitter-based**：
        1. chemical structures conforming to standardization rules are accepted as primary database records assigned to each discrete submitter by means of Substance Identifiers(SIDs).
        2. These are then merged, according to PubChem chemistry rules, into non-redundant Chemical Identifiers(CIDs)
        3. 236 million SIDs $\rightarrow$ 94 CIDs (2.5SIDs per CID).
        * Problem: This is a heavily **skewed distribution**, 48 million CIDs in PC are unique as defined by being derived from a single source.

## 1.2 major sources
* 548 data source, 488 of these have live substance counts. (some of them contribute annotation links but not structures, like ClinicalTrials.gov).

* 282 have more than 1000 SIDs but over 90 sources have 10 or fewer.

* Features:
    * dominance of **vendor** aggregators.
    * **automated patent extraction** comes in as second.

## PubChem Features
1. The substance submissions include entries that cannot form CIDs, since:
    * they have not been transformed into SMILES or SD files by the submitters. 
    * To become a CID, the SIDs have to within the current upper limit of 1000 atoms, approximating to $\approx$ 70 residues for a peptide. Those exclude from CID merging are thus **larger peptides, polynucleotides, or siRNA reagents, but also include biological therapeutics such as antibodies.

2. the surfacing of biological activity data in PubChem BioAssay (it can also includes SIDs without CIDs.
    * 2.4 million CIDs have been tested in 1.2 million assays and 1.1 million of these have at least one SID recorded as "active". Compared to a typical HTS assay, where hit rates are usually threshold filtered to around 1%, there are clearly caveats with the definition of **"active" when this is as high as 45%**.
    * BioAssay also has what appear to be **false negatives** in the _information capture_ sense. For example INN query retrieves 8949  CIDs, but only 4399 of these have Bioassays scored as "active". It might because: 
        * Nearly half the INNs have neither explicit activity data against human protein targets reported in publications that ChEMBL has extracted(4321/7053), nor have accumulated such data from the screening centers (only 3926).
        * new INNs, old INNs, and the BioAssay data had been assigned to a different stereoisomer.
    * the integration of PC into **Network Entrez**.
        * This is a powerful and extensive system for the cross-referencing of information about biological and chemical entries from the 136 databases within the NCBI.(Including: the direct connectivity between compound, substance, BioAssay, protein sequences, protein structures and pathways)
        * the ability to upload, immediately visualize and then download, Entrez result sets from bulk queries.

# 2. UniChem
## 2.1 UniChem Features
* UC is a large-scale database of **pointers** between **chemical structures**. It doesn't store the actual structures, but these can be accessed via the **source URLs** (linking to ChEBI, ChEMBL, SureChEMBL, PDBe, and most recent Metabolites, as well as 32 external sources)

* The **InChIKey (IK) centric** cross-pointing and redundancy reduction is conceptually similar to the SID merging rules in PC.

* It also uses features of the **Standard InChI** to enable mappings between molecules that share common atom connectivity via the **inner Key layer**. This extends across _isotopes, stereo forms, mixtures, and salts_

## 3.2 UniChem major sources
* The UC structure:assignment ratio is 1.37, approximate equivalence to PC CID:SID.

# 3. ChemSpider
## 3.1 Basic features
* It's not an open data source, so it is **not** subsumed into UC (but in PC). 
* It  offers services to improve submitted data by **user corrections**, **added annotations** and **integration with user applications**.
* ChemSpider SyntheticPages covers reactions with _citable URLs_, _peer review_, and _semantic enhancement_
* direct links to structures in **RSC journals**.

## 3.2 ChemSpider major sources
* A notable absence of the large automated patent sources of SureChEMBL and IBM

# 4. Comparative content
## 4.1 Sources in common
1. Distribution of the top 50 sources (Fig.7)
    * a steep fall-off in UC
    * CS is dominated by more smaller sources than PC
2. Figure 8: Normalized name intersects for sources with greater than 1000 structures between the tree databases
    * divergence between PC and CS but some degree of convergence with US in that over 70% of its resources are shared with either of the other two.

## 4.2 Unique sources
* **CS**: three named individuals exceed the 1000 cutoff, with SE and two CS team members: DS and SR.
* **PC**: Some larger PC-only sources have low levels of uniqueness. These turn out to be **re-submission** errors that have connectivity to other existing CIDs.
* **UC**: has 6 large sources not in CS or PC. Intra-source comparisons within UC will reflect circularity from the co-integration of PC into UC.

> Definition of structural identity in UC:
>
> 1. identity of the full IK
> 2. the connectivity layer of the IK
> 3. the connectivity layers of multiple molecular components.

## 4.3 Source differentials and dates 

> The frequently update of sources is inherently a good thing, but leaves the meta sources with **two challenges**:
>
> 1. their internal synchronization and submission processing times.
> 2. the balance between "pulling"(from sources) and "pushing"(by submitters)

Strategies for update dates recording used by three databases:

* **PC**: makes these query-selectable for all submissions;
* **CS**: does not surface record dates in the interface, but does indicate first and latest upload dates for most sources.
* **UC**: operates a weekly rebuild and automatically assigns that date to each source for the computed statics.

## 4.4 Vendors and virtuals
* content overlap between vendors becomes higher than users probably want.
* high novelty levels have to be caveated with doubts over structural quality because many of these turn out to be related to known CID via "same connectivity" matches in PC.

# 5. Utility tips 
1. These databases are dynamic, checking current loading dates for sources of particular interest.

2. when doing some researches on the theme of **drug discovery**, **PC** should be first considered.
    * Unparalleled connectivity between compound, substance, BioAssay, Pubmed, and Entrez
    * The combination of filtering, mining, and analysis features.
        * Selecting and intersecting are particularly powerful features of PC.
        * The ability to perform quality assessment **in situ**.
        * The ability to **salt-strip** via the "Chemical Properties" menu with the "CovalentUnitCount" is another useful clean up step for inter-source analysis or filtering sets for download.

3. **Circularity** as identical content between sources, for legitimate reasons.
    * US have several sources come in twice as independent loads and via PubChem subsumation.
    * PC can be illustrated for the two important activity data submitters of ChEMBL and BindingDB.

4. For users are designing new chemical structures (is there anything out there similar to what I am working on?), it would be **prudent** to check the other two databases.

5. A crude approximation to the merging of all three database in the form of searchable IKs as indexed in **Google**.

