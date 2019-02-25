# Reference Genome

## Locate elements on genome

The Reference genome data used is a _coordinate system_ for describing the _location_ of everything in a genome.

Bioinformaticians represents elements on genome in a _range_ data type.

Genomic Ranges:

1. **Chromosome name**: or _sequence name_. It indicates the chromosomes. For human genome there are 24 different chromosomes (1-22, x, y).
2. **Range**: It is composed of a _start position_ and an _end position_. It specifies the **location** of certain elements on the chromosomes. The unit is base pair (bp). There are 2 different coordination system used for locate elements:
    * 1-based: start from 1, like the index system in R. File type: _GTF, GFF, SAM, VCF, Wiggle, GenomicRanges, BLAST
    * 0-based: start from 0, like the index system in Python
3. **Strand**: It indicate on which strand of DNA the elements are located. They are symbolized as `+`(positive strand) and `-`(negative strand).

## Reference genome version

Different versions of reference genome provide different _coordinate system_ for locating elements. There are some tools for transform among different versions:

1. CrossMap
2. NCBI Gnome Remapping Service
3. Liftover (UCSC Genome Browser's site)

