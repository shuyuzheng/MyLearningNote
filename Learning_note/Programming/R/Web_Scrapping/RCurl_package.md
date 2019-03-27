# HTTP
* **HTTP** is one of the _protocols_ for client to _communicate_ with server.
* **URL** is the _information_ client using to _communicate_ with server. It contains: `scheme://hosstname:port/path?querystring#fragment`
    * scheme/protocol: HTTP, HTTPS, FTP...
    * Web server/Host: www.balabala.com
    * port(hidden): the default port is 80 for HTTP,  443 for HTTPS.
    * Path: the location of the _source_ on the _server_
    * query string: the strings you used to query the resource.
    * fragments: the _part_ of _document_ will be display on the browser.

* HTTP request message contains:
    1. start line:

        ```
        [method] [path] [HTTP version]        
        ```

        * method: GET, POST, HEAD, PUT, DELETE, TRACE, OPTIONS, CONNECT.
    2. Header: a set of `[header name:] [header value]` followed by a _blank line_
    3. body (optional)

* Response message from server:
    1. start line:

        ```
        [HTTP version] [status code] [human-readable explanation of the status]
        ```
    2. header:  a set of `[header name:] [header value]` followed by a _blank line_
    3. body: document required