Original Article could be found on official PubChem Docs page: [Programmatic Access](https://pubchemdocs.ncbi.nlm.nih.gov/programmatic-access)

---

# Entrez Utilities (also called E-Utilities or E-Utils)
1. Ability:
    * It is used to access to information contained in the **Entrez system**.
    * It suited for accessing **text** or **numeric-fielded** data.
2. Limitation:
    * They cannot deal with more complex types for data **specific to PubChem**.(like chemical structures and tabular bioactivity data)

# Power User Gateway (PUG)
1. Ability:
    * Programmatic access to PubChem services via a single **common gateway interface (CGI)**, called 'pug.cgi'(http://pubchem.ncbi.nlm.nih.gov/pug/pug.cgi)
    * PUG exchanges data through **XML** via a **HTTP POST** instead of URL.

# PUG-SOAP
1. Ability:
    * It breaks down operations into **simpler functions** as defined via the [web service definition language (WSDL)](https://www.w3.org/TR/wsdl/)
    * It uses **SOAP-formatted message envelopes** for information exchange.
    * This WSDL/SOAP layer is most suitable for **SOAP-aware GUI workflow applications** and **programming/scripting languages**(e.g. C, C++, C#, .NET, Perl, Python and Java)
2. Limitation:
    * It can not access to some data as that could be accessed via PUG.

# PUG-REST
1. Ability:
    * A **Representation State Transfer(REST)-style** web service access layer to PubChem.
    * Provide a **simplified access route** without the overhead of XML or SOAP envelopes.
    * Provide access to information **not** possible with the other PUG service.
    * Handle a **short, synchronous** request.

# PUG-View
1. Ability:
    * A **REST-style** web service
    * Provide **annotation  information** for PubChem Substance, Compound, or BioAssay records.

# PubChemRDF REST interface
* It is used to access **RDF-encoded** PubChem data.

---
# Recieve from help center

## Retrieve clinical trial information of drugs from PubChem

1. Find the compound cids with clinical trial information (currently there are 8346 cids): 
    * https://pubchem.ncbi.nlm.nih.gov/classification/#hid=72&search=Clinical%20Trials&view=list 
    * Click the link 1. Clinical Trials “8346” on the page.
    * On the new page, you will see a list of those compounds. Then, click “Send to” -> Choose Destination[File] -> Format [UI List] -> Create File

2. find clinical trial annotation by cid: 
    * From those cids, you may write a script to retrieve the clinical annotation using the following way [CID: 2244 as an example]: https://pubchem.ncbi.nlm.nih.gov/sdq/sdqagent.cgi?infmt=json&outfmt=jsonp&query={"download":["cid","ctid","link","title","phase","status","updatedate"],"collection":"clinicaltrials","where":{"ands":[{"cid":"2244"}]},"order":["updatedate,desc"],"start":1,"limit":1000000} 
    * NOTE: you may find this URL under the “download -> CSV:Save” on this page (https://pubchem.ncbi.nlm.nih.gov/compound/2244#section=Clinical-Trials&fullscreen=true). 

Please notice the request volume limitations for programmatic access (https://pubchemdocs.ncbi.nlm.nih.gov/programmatic-access), which is currently (1) No more than 5 requests per second. (2) No more than 400 requests per minute. (3) No longer than 300 second running time per minute.
