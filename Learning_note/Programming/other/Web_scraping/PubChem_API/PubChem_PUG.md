* The primary data container used in **all transactions** is <PCT-Data>, the top-level container for any PUG input or output.
    * <PCT-InputData>: sent message to server.
    * <PCT-OutputData>: recieve message from server.

* The process of interaction with server:
    1. User submits a task to PUG.
    2. Request is **queued** until PUG return an XML message with a **request ID**.
    3. User could **(periodically) poll PUG** using the request ID, until the task is complete.
    4. PUG will return the **result** or **status message**.

# Input type of <PCT-InputData>
1. <PCT-Request>: Request management enables you to enquire about the **status** of or to **cancel** a previous PUG request.

# Output type of <PCT-OutputData>
1. <PCT-Status-Message>: 
    * An enumerated status in <PCT-Status>
    * An optional essage string.
2. <PCT-Waiting>: contains your **request ID**

# PUG Tasks

* Available tasks:
    * PubChem Download
    * PubChem Compound Structure Search
    * PubChem BioAssay Data Download
    * PubChem Structure Standardization


