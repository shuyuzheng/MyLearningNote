---
title: "CRISPR-Cas9 genome editing induces a p53-mediated DNA damage response"
author: Shuyu
date: 21th Sep, 2018
output: 
    word_document:
        path: C:\Users\zsy\Documents\google_drive\Notes\paper_reading\CRISPR-Cas9.docx
---

# Observation:
1. Guide sequences targeting essential genes were not efficiently depleted RPE1 cell.
2. In RPE1 cell, the levels of guides targeting the Tp53, CDKN1A(encoding p21) and RB1(encoding pRB) are dramatically increased.(knockdown these genes survival the corresponding cells.)(Fig.1b)

# Hypothesis 1:
- Cas9 → DSBs → activate p53 → growth arrest =>
- all cutting guide RNAs(gRNA) will cause a transient cell cycle arrest → failure to detect essential genes in the CRISPR screen.

## Observation:
genome-wide CRISPR-Cas9 screen → p53+/+ and p53-/- RPE1 cell (Fig.1c)
	
1. In p53-/- cells essential gene targeting guide genes decreased more significantly than that in p53+/+ cells.
2. Non-targeting control gene ranks have the similar distribution in both group of cells.
* **Suggests:** 
		a. The deletion of p53 involves the essential gene detect efficiency by using CRISPR-Cas9.
		b. This effect is due to on-target DNA cutting and does not result from off-target DSBs.
3. Guides targeting p21 were enriched in p53+/+ but not in p53-/- cells.
	(guide for p21 block the effect of p53)
* **Suggests:**
	Loss of p21 only confer a growth advantage in the presence, but not the absence, of p53.
## Conclusion:
DSBs introduced by CRISPR-Cas9 trigger a transient, p53-dependent cell cycle arrest mediated through p21 and pRB, irrespective of the locus targeted.

# Observation:
RNP complexes containing Cas9 and a guide → p53+/+ and p53-/- RPE1 cells

1. The exposure to Cas9 RNP activity resulted in a partial G1 arrest in p53+/+ not in p53-/- (Fig. 2a)
2. They did not detect caspase 3 cleavage (represents that apoptosis was activated) in response to RNP delivery in RPE1 cells. (Fig.S1)
* **Suggests:**
	CRISPR-Cas9 induced p53-dependent cell cycle arrest rather than apoptosis.
	
# Hypothesis 2:
* Precision genome editing using CRISPR-Cas9 is based on the (homology-directed repair) HDR machinery, which is most active in the S phase.
* G1 arrest might preclude efficient HDR, instead favoring imprecise repair by (Non-homogenous end joining)NHEJ
* High NHEJ-mediated insertion and deletion count and the relatively low efficiency of HDR-dependent precision gene editing in normal cells.
* P53 inhibition → permit cell cycle progression in the presence of Cas9-induced DSBs → increase the frequency of HDR and of precision genome editing 
## Observation:
Cas9RNP targeting the mutation site of the dead GFP & single-stranded DNA oligonucleotide → RPE1 p53+/+ and p53-/- reporter cell lines expressing BFP and mutationally inactivated GFP

1. Primary and immortalized RPE1 p53+/+ cells showed less efficient gene correction than p53-/-.(Fig.2c)
2. Palbociclib CDK4/6 inhibitor (arrests cells in G1), decreased GFP repair by 50% in both cell lines.(Fig.2d, S2)
3. Co-transfection of the p53 antagonist MDM2 dose dependently improved the repair efficiency in the p53+/+ line.(Fig.2e)
4. The effect in 3 was inhibited by mutlin-3a(a compound that specifically abolishes the p53-MDM2 interaction)
* **Suggests:**
	1. Stall cell cycle progression hampers precision genome editing.
	2. Improved repair in response to MDM2 overexpression is mainly due to MDM2-dependent p53 degradation.
## Conclusion 2:
P53 activation causes a G1 arrest → decreases the efficiency of precision genome editing from a repair template.

There might be other mechanisms act downstream or parallel to p53 in limiting the efficiency of precision genome editing in normal human cells.

# Hypothesis 3:
Plasmid, exogenous protein or lentiviral delivered by CRISPR procession →type I interaction (IFN) response → growth arrest and apoptosis.
## Observation:
Inhibitors of the IFN-α, interleukin-1β and Toll-like reporter signaling, failed to improve the efficiency of genome editing in p53+/+ RPE1 cells.

* **Suggests:**
	The Type I IFN response alone does not explain the observed CRISPR-Cas9 toxicity and G1 arrest in RPE1 cells.

## Conclusion 3:
1. Genome editing by Cas9 in p53-proficient cells → DNA damage response → growth disadvantage/arrest → decreases efficiency of precision genome editing.
2. The observed effect is dependent on p53, its direct target p21 and on pRB (mediates the G1 cell cycle arrest in response to p21)
3. Very few DSBs are sufficient for the growth arrest.
4. Inhibiting DNA damage signaling can improve the efficiency of precision genome editing in normal, untransformed cells.

# Discussion:
Pro and con of p53 inhibition:

* Inhibition of p53 could potentially allow the escape of cells whose genome is damaged during the editing process itself.(positive or negative effects on the tumorigenic potential)
* It will increase the editing efficiency and decrease the selective advantage of pre-existing p53-deficient clones.


