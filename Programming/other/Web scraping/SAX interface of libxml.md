# Basic concept

**Drawbacks of SAX**:

1. a bit more code than the DOM interface.
2. It can not write the XML document back to the disk.
3. You may have to redesign or rethink your file loading routines.

**Benefits of SAX**:

1. There are potentially less memory allocations.
2. If you convert the data in the DOM tree to another format, the SAX may help remove the intermediate step.
3. If you do not need all the XML data in memory, the SAX allows you to process the data as it is parsed.

**The SAX interface**: Pass a number of **callback routines** to the parser in a **xmlSAXHandler** structure. The parser will then parser the document and call the appropriate callback when certain conditions occur.

# Handlers
1. `startDocument`: we would initialize **any variables** that are required during parsing.