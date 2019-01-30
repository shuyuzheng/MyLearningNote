# URL-based API
## The URL Path
* The general form of the URL:
    * input: tells the service **which records to use as the subject of the query**.
    * operation: tells the service what **to do** with the input records.
    * output: tells the service what **output format** is desired.

An example:
```
https://pubchem.ncbi.nlm.nih.gov/rest/pug/<input specification>/<operation specification>/[<output specification>][?<operation_options>]
```

## input
Notes:

* Some source names contain the ‘/’ (forward slash) character, which is incompatible with the URL syntax; for these, replace the ‘/’ with a ‘.’ (period) in the URL. 
* Other special characters may need to be escaped, such as ‘&’ should be replaced by ‘%26’. For example:
```
<input specification> = <domain>/<namespace>/<identifiers>

<domain> = substance | compound | assay | <other inputs>

compound domain <namespace> = cid | name | smiles | inchi | sdf | inchikey | formula | <structure search> | <xref> | listkey | <fast search>

<structure search> = {substructure | superstructure | similarity | identity}/{smiles | inchi | sdf | cid}

<fast search> = {fastidentity | fastsimilarity_2d | fastsimilarity_3d | fastsubstructure | fastsuperstructure}/{smiles | smarts | inchi | sdf | cid} | fastformula

<xref> = xref / {RegistryID | RN | PubMedID | MMDBID | ProteinGI | NucleotideGI | TaxonomyID | MIMID | GeneID | ProbeID | PatentID}

substance domain <namespace> = sid | sourceid/<source id> | sourceall/<source name> | name | <xref> | listkey

<source name> = any valid PubChem depositor name

assay domain <namespace> = aid | listkey | type/<assay type> | sourceall/<source name> | target/<assay target> | activity/<activity column name>

<assay type> = all | confirmatory | doseresponse | onhold | panel | rnai | screening | summary | cellbased | biochemical | invivo | invitro | activeconcentrationspecified

<assay target> = gi | proteinname | geneid | genesymbol | accession

<identifiers> = comma-separated list of positive integers (e.g. cid, sid, aid) or identifier strings (source, inchikey, formula); in some cases only a single identifier string (name, smiles, xref; inchi, sdf by POST only)

<other inputs> = sources / [substance, assay] |sourcetable | conformers | annotations/[sourcename/<source name> | heading/<heading>]
```

Two examples
```
https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244/<operation specification>/[<output specification>]
https://pubchem.ncbi.nlm.nih.gov/rest/pug/substance/sourceid/DTP.NCI/<operation specification>/[<output specification>]
```

## Operation
* Default operation is **to retrieve the entire record**.
* The availability of Operations depends on the **input domain**.

```
compound domain <operation specification> = record | <compound property> | synonyms | sids | cids | aids | assaysummary | classification | <xrefs> | description | conformers

<compound property> = property / [comma-separated list of property tags]

substance domain <operation specification> = record | synonyms | sids | cids | aids | assaysummary | classification | <xrefs> | description

<xrefs> = xrefs / [comma-separated list of xrefs tags]

assay domain <operation specification> = record | concise | aids | sids | cids | description | targets/<target type> | <doseresponse> | summary | classification

target_type = {ProteinGI, ProteinName, GeneID, GeneSymbol}

<doseresponse> = doseresponse/sid
```

An example:
```
https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/2244/property/MolecularFormula,InChIKey/[<output specification>]
```

### Output 
* This is formally **optional**, as output format can also be specicied in the HTTP Accept field of the request header
```
<output specification> = XML | ASNT | ASNB | JSON | JSONP [ ?callback=<callback name> ] | SDF | CSV | PNG | TXT
```
* **ASNT**: is NCBI's text (human-readable) variant of ASN.1
* **ASNB** is standard binary ASN.1 and is currently returned as Base64-encoded ASCII text.
* NOt all formats are applicable to the results:
    * whole compound record $\nrightarrow$ CSV
    * property table $nrightarrow$ SDF
    * TXT **only available** in cases where all the information is the same.
