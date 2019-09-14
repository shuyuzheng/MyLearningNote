# Basic ideas of Limma

1. _What's Limma?_ It's an R package archived in BioConductor for **gene expression data analysis**.
2. _What's the input data type?_
    * **Single-channel or two-channel microarray data**: _limma_ or _limma_ + _marray_
    * **Affymetrix microarray data**: _limma_ + _affy_
    * **Illumina BeadChips**: _limma_ + _vst_ or _limma_ + _beadarray_
    * **RNA-Seq data**: _limma_ >= v3.9.19 (convert a table of sequence read counts into an expression object)
3. _What model used by Limma?_ linear models. 
4. _Ability of limma_
    * Handle small number of arrays by _borrowing information across genes_
    * Handle single-channel and two-color microarrays (output from image analysis software platforms, like GenePix, ImaGene ...)
    * Reading, exploring and pre-processing data from two-color microarrays
5. Graphical user interface:
    * limmaGUI
    * affylmGUI


