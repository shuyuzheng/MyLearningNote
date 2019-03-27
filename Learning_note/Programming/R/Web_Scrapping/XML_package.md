# 1. Parsing XML Document
## 1.1 Document-based Parsing
### Read and parsing documents
#### XML documents
* `xmlTreeParse()`: returns XML nodes as a list of lists in R
    * What does it do by default?
        1. It reads an XML document into a **hierarchical structure** representation.
        2. It builds an **XML tree** as a native _C-level data structure_
        3. It returns an object of class `XMLInternalDocument`.
    * What can it do?
        1. It can read content from _compressed file_ without uncompress process.
        2. It can parse well-formed HTML document.
    * What are it can not do by default?
        1. It does **not** handle HTTPS
        2. It will not work properly when XML (or HTML) documents are _not_ well-formed. like:
            * no XML declaration
            * no DOCTYPE
            * no closure of tags
    * `file` argument can hold: a local file, an URL or a text string.
    * `useInternalNodes`:
        * `TRUE`, returns a (`XMLInternalDocument`)(_C-level_).
        * `FALSE`, returns a list (`XMLDocument`)(_R-level_)

* `xmlInternalTreeParse()`: equivalent to `xmlTreeParse(useInternalNodes = TRUE)`

#### HTML documents
1. `htmlParse()`: returns an `HTMLInternalDocument`(_C-level_),equivalent to:
    * `xmlParse(isHTML = TRUE)`
2. `htmlTreeParse()`: returns a `XMLDocumentContent`(_R-level_), equivalent to:
    * `htmlParse(useInternalNodes = FALSE)`
    * `xmlParse(isHTML = TRUE, useInternalNodes = TRUE)`
* `tidyHTML()` from `RTidyHTML` package could be used in some **very bad-formed** HTML document before parsing.

#### Read table content
1. `readHTMLTable(file)`: read the content of the table from file.
2. `xpathSApply(doc, path_to_table)`: read specific table in a XML document.

## 1.2 Processing the Nodes

The default classes of Nodes:
* XMLNode
* XMLComment
* XMLEntity
* XMLText

User can provide functions that **post-process** these nodes _before_ they are added to the R document tree. `handlers`

1. User provides a name list of functions as the value of the parameter `handlers`.
2. The C-level conversion takes each XML element, converts it to an `XMLNode`(or similar class).
3. Calls the appropriate function from the list to the `XMLNode`.
4. Return of the functions:
    * `NULL`: indicating that the node should be discarded and not added to the document tree.
    * An `object` to be added to the tree.

How is the appropriate function selected?

1. Directly define the function list in the `xmlTreeParse` function:

    ```
    doc <- xmlTreeParse(file, 
                        handlers = list(startElement = function(node){
                                                        if(inherits(node,"XMLComment"))
                                                            NULL
                                                        else
                                                            node
                                                        }),
                            asTree = TRUE
                        )
    ```
2. Previously define a **closure** to store a list of tag names that we wish to keep in the document tree, discarding all others.

    ```
    xmlKeepTags <- function(tagNamesToKeep) {
                    startElement <- function(node) {
                        if(any(xmlName(node) == tagNamesToKeep)) {
                            cat("Keeping",xmlName(node),"\n")
                            return(node)
                    }
                    else {
                        cat("Discarding",xmlName(node),"\n")
                        return(NULL)
                    }
                }
                    return(list(startElement=startElement))
            }
    doc <- xmlTreeParse(file,system.file("exampleData", "mtcars.xml", package = "XML"),
                        xmlKeepTags(c("variables","dataset")))
    ```
**Note**: The nodes are processed _upward_.

* `parseDTD()`: Parse the DTD file to find what nodes allow the ones in which we ate interested as sub-elements.
    
    ```
    dtd <- parseDTD("DTD_document")

    which <- character()
    for (i in names(dtd$elements)){
        if (dtdValidElement("variable", i, dtd))
        which <- c(which, i)
    }
    ```

#### XPath functions (a language for finding information in XML)
* [XPath syntax](http://www.w3school.com.cn/xpath/index.ASP)
* `getNodeSet()`: return a list of the matching nodes. using `sapply` or `lapply` to apply functions to them.
* `xpathApply()`: apply a function to each of the nodes. 
* `xmlApply()`: a wrappers for the `lapply()` function

#### Extract information from nodes
* `xmlName()`: returns node/element name.
* `xmlAttrs()`: returns all _name-value_ pairs as a character vector.
* `xmlGetAttr()`: return the _value_ of a _single_ attribute with facilities for providing a **default value** if it is not present and converting it if it is.
* `xmlValue()`: returns the values of _nodes_.
* `xmlSize()`: returns the **number of subnodes**.

### "walk" in the tree
* `xmlRoot()`: returns the roo node.
* `xmlChildren()`: returns a normal R list containing all of the child nodes. 
* Operations on _Child nodes_:
    * Get the **number** of child nodes:
        * `xmlSize()`: returns the number of _child nodes_ within this _node_.
        * `length(xmlChildren()`: same as above.
    * Extract subsets:
        * `xmlChildren(node)[[x]]` or `xmlChildren(node)[m:n]`: get the _subset_ of child nodes by _index_.
        * `xmlChildren(node)[c("a", "b")]`: get the _subset_ of child nodes by _name_
    * apply functions: as the result of `xmlChildren()` is also nodes, the functions working on the node can also be applied to its result.
        * `sapply(xmlChildren(node), xmlGetAttr, "id")`: apply the `xmlGetAttr` function to all the children the node.
        * `xmlSApply(node, xmlGetAttr, "id")`: same as above
        * another available function: `xmlApply()`
* `xmlParent()`: gets the parent node of an XML node or returns `NULL`
* `xmlAncestors()`: returns name of ancestor nodes.
* `getSibling()`: gets the _next sibling_ to left or right of a particular node in the list of children.

## 1.3. SAX & Event-driven Parsing (dealing with large data)

When shall we use it?
1. Dealing with large data when reducing memory requirement is necessary.
2. The source of the XML are **not complete**. The source may be periodically generates more output (where data is an "infinite" stream).
    * Providing **dynamic updating** of the intermediate or current results.
    * whether to **continue**, **monitor** for strange events.
    * performing **quality control** procedures
    * generally performing **statistical analysis** on the process.
3. One wishes to extract **rows** or **cells** that fit **particular criteria**.

* `xmlEventParse()`: is the event-driven or SAX (Simple API for XML) style parser which process XML **without** building the _tree_ but rather **identifies tokens** in the stream of characters and passes them to **handlers** which can make sense of them in context.
* You have to provide **functions** that are invoked when the parser encounters **events** within the XML stream such as _the start of node, the end of a node, a text chunk, a processing instruction,comments, CDATA, entities and so on_.
* This allows the caller to **create the appropriate data structure** from the XML document contents rather than the default tree and **avoid having the entire document in memory**.
* **handler**: a closure object that contains functions which will be invoked as the XML components in the document are encountered by the parser.
    * standard function or handler names: `startElement()`, `endElement()`, `comment()`, `getEntity()`, `entityDeclaration()`, `processingInstruction()`, `text()`, `cdata()`, `startDocument()`, and `endDocument()`
    * alternatively and preferably: prefix the names above with `.`
    * user defined handler for specific elements: `"myTag" = function(x, attrs)`

### Example for dynamic update data frames
1. Update new records according to order.

    ```
    record <- function(x, atts){
    if (is.na(match(atts[["id"]], desiredRowNames))) {
      # discard this entry
      return()
    }
    processRow <<- 1
      # advance the current record index.
      # (Same as previous version).
    currentRecord <<- currentRecord + 1
    rowNames <- c(rowNames, atts[["id"]])
    }
    ```
2. Update according to content of new records

    ```
    record  <- function(data){
        as.numeric(data["cyl"]) >= 6 & as.integer(data[2]) < 100
        for(i in els) {
          data[currentRecord, currentColumn] <<- as.numeric(i)
          currentColumn <<- currentColumn + 1
        }

        data[[length(data)+1]] <<- els
        names(els) <- varNames
            if(accept(els)) {
                data[[length(data)+1]] <<- els
                rowNames <<- c(rowNames, currentRowName)
            }

        if(x == "dataset") {
            data <- data.frame(matrix(unlist(data),length(data),length(varNames), byrow=T))
            names(data) <- varNames
            rownames(data) <- rowNames
        }
    }
    ```
# 3. Creating XML
* `newXMLNode()`: takes the name of XML element/node, `attrs` argument can be used to specify attributes.
* change or add attributes: `xmlAttrs(node)["name"] = "value"`

Bibliography:
1. Lang, D.T., and Davis, U.A., Short Introduction to the XML package for R.
2. [R Documentation: xmlEventParser{XML}](http://web.mit.edu/~r/current/arch/i386_linux26/lib/R/library/XML/html/xmlEventParse.html)
3. Gaston, S., Getting Data from the Web with R, PowerPoint, 2014.4.
4. Lang, D.T., Manual.