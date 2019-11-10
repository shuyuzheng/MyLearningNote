# Applying drug synergy metrics to oncology combination screening data: agreements, disagreements, and piyfalls

## Author

Anna H.C.Vlot_1,2_, NataliaAniceto_1_, Michael P.Menden_3,4,5_, GudrunUlrich-Merzenich_6_, AndreasBender_1_
1. Department of Chemistry, Centre for Molecular Science Informatics, University of Cambridge, Cambridge, CB2 1EW, UK
2. Berlin Institute for Medical Systems Biology, Max Delbrück Center for Molecular Medicine, Berlin, 13125, Germany
3. Institute of Computational Biology, Helmholtz Zentrum München — German Research Centre for Environmental Health, 85764, Munich, Germany
4. Department of Biology, Ludwig-Maximilians University Munich, Martinsried, 82152, Germany
5. German Centre for Diabetes Research (DZD e.V.), Neuherberg, 85764, Germany
6. University Hospital Bonn (UKB), Medical Clinic III, AG Synergy Research, Bonn, 53127, Germany

## Data

2019-09-10

## The factors impact synergy estimations
1. plate format: 96-, 384-, 1536-well plates;
2. seeding density;
3. Control wells; (negative control and positive control)
4. Concentration matrix design:
    * Simplest design with 2 $\times$ 2 matrix:
      * non-treatment control;
      * monotherapy of drug A;
      * monotherapy of drug B;
      * combination of drug A and B
    * Anchored screening:
      * Fix the concentration of drug A (anchored drug). Typically the IC50;
      * Screen drug B at n doses under monotherapy or combination with drug A;
    * Complete drug combination matrices:
      * First row and first column are monotherapies of drug A and drug B;
      * All concentration combination of drug A and B are tested in remain cells in the matrix.

# Reference models

1. Loewe: The accuracy of Loewe model across the whole tested concentration range can only be guaranteed when applied to compound combinations that show a similar pharmacodynamic profile in terms of having the same maximum response and a constant potency ratio.
2. Bliss: Achieving a certain effect through independent processes is biologically unlikely because crosstalk between biological pathway is abundant with respect to the same biological endpoint.
3. HSA: HSA scores temd to be overly optimistic because it has the lowest threshold for assigning synergy.
4. ZIPi: It depends on the accurate fitting of the dose-response curve to a log-logistic curve to obtain an accurate fitting of the relative half-maximal effect concentration (EC_50_) and the slop parameter.

# Results from previous studies
1. The expected effect values for CA are larger than values for IA when considering steeper dose-response curves.
2. The expected response for Bliss is generally higher than that for Loewe for non-linear dose-response curves.
3. ZIP was more similar to Bliss and HSA based model than Loewe.
4. The highest agreement was observed between HSA and Loewe. The lowest agreement is observed between Bliss and ComboScore (a score used by original analysis of NCI ALMANAC screen)

# Method

## Data

Large-scale combination oncology screen by Merck & Co

## Synergy scores

* Synergy scores S from: SynergyFinder 1.6.1 for each well.

* Synergy Weighted-sum-score ($S_{wss}$) for whole 5X5 synergy surface of each combination matrix.

* $CI_{99.9%}$ of S and $S_{wws}$ obtained from four technical replicates are used to classification: 
    * Synergistic: $S(_{WWS}) < 0, 0 \notin CI_{99.9%}$;
    * Antagonistic: $S(_{WWS}) > 0, 0 \notin CI_{99.9%}$;
    * Additive: others

* Metric of comparison:
    * Batch-to-batch experimental variation and variation between metrics: mean, median, standard deviation (SDs), Pearson correlation coefficients (r) and Spearman rank correlation coefficients ($\rho$)
    * Classified data: Cohen's $\kappa$, conditional probabilities of encountering antagonistic classifications for one and antagonistic classifications for another metric.

# Results

1. Interbatch comparability within and between metrics: HSA and Bliss independence are more **robust** to small changes in the dose-response relationship. (16% of the combinations in the original data are failed to obtain Loewe and ZIP.)
2. Comparability between synergy metrics: 
    1. S 
        * Strictness (mean value is lower): Loewe > Bliss > ZIP > HSA
        * Dispersion (SD value is higher): Loewe > HSA > ZIP > Bliss. $SD_{loewe}$ (15.4) is much higher than others (9 - 10)
        * Number of combos classified as antagonistic: Loewe > ZIP > Bliss/HSA
        * Highest proportion of combinations classified as synergistic: ZIP
    2. $S_{WSS}$
        * Strictness (Percentage of antagonistic matrices is high): Loewe > Bliss > HSA > ZIP
        * Number of combos classified as antagonistic: HSA > Bliss > Loewe/ZIP
    3. Metrics:
        * Highest agreement: $S_{Bliss}$ and $S_{HSA}$ (r = 0.86, $\rho$ = 0.76, $\kappa$ = 0.68)
        * Lowest agreement: $S_{Loewe}$ and $S_{ZIP}$ (r = 0.32, $\rho$ = 0.34, $\kappa$ = 0.22)
        * The ranked correlation and class agreement of $S_{ZIP}$ versus all other metrics is low ($\rho$ = 0.34 - 0.53, $\kappa$ = 0.22 - 0.28)
