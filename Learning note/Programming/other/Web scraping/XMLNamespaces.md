# Problem
The name of elements in XML is more flexible than HTML. It is common to see the same element names or attribute names (**local names**) was used in different meanings. (e.g. the `part` element can appeared inside ot a `house` or a `car` element in the same document with different meanings.).

In these cases the computer or XML parsers (They are not as claver as human mind right now) can not figure out the differences between the elements between the two elements with **same** name but in the **different** contexts.

# Solution
To improve this embarrassed situation, the **XML Namespaces Recommendation** tried to _extending_ the data model to allow element type names and attribute names to be qualified with a **URI**.

So the names become **Universal names** (_local name_ + _URL_). The added _URI_ makes the names _unique_ within a certain XML document.

