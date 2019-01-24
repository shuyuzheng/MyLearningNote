# Tags

## Basic elements
* Headings: `<h1>`, `<h2>`, ...
* paragraph: `<p>`
* comment: `<!--something here-->`
* image tag: `<img src="path" alt="text for screen readers">`
    * `src` is necessary

## Anchors
* external anchor: `<a href="url">word on the screen</a>`
    * `href` is necessary, Target
    * `target="_blank"` this calse the linked document to open in a **new window tab**.
* internal anchor: 
    * internal anchor link: `<a href="#target-id">words on the screen<a>`
    * target element: `<name id="target-id">contents</name>`
* nest elements:
    * you can nest `<a>` into `<p>` to create an inline link.
    * you can nest an `<img>` into `<a>` by replacing `words on screen` to make the picture as a link trigger.

## lists
* unordered lists/bullet point style lists:
    ```
    <ul>
        <li>item1</li>
        <li>item2</li>
    <ul>
    ```
* ordered lists/numbered lists:
    ```
    <ol>
        <li>item1</li>
        <li>item2</li>
    </ol>
    ```

## Web form
* a form **submit data to a server**: `<form action="url where you want to submit form data"></form>`
    * you can nest the following elements into `<form>` element.
* **text input**: `<input type="text">`
    * add a place holder in the text box: `placeholder="holder words"`
* **submit button**: `<button type="submit">words on screen</button>`
* **radio button**: a series of radio buttons nested in its own `label` element with the same value in their `name` attribute. When select one of them, it will automatically deselect others.
    
    ```
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
    ```
* **checkbsoxess**: a set of check box allows user to select multiple items at once. Its syntax is similar as `radio`.
    
    ```
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    ```
* you can make your _radio button_ or _checkbox_ **checked** by add a `checked` attribute in the `<input>` tag.
        ```
        <label><input type="checkbox" name="personality" checked> Loving</label>
        ```
    
## Divide your contents
* **division element** `<div>`: divide the content into different classes.

# Declare the Doctype of an HTML Document

Declare the document type by `<!DOCTYPE ...>` and wrap your content in `<html>` `</html>` tags

```
<!DOCTYPE html>
<html>

</html>
```

# Divide documents with <head> and <body>

`<head>` could contain: `<title>`, `<link>`, `<like>`, `<meta>`, `<syle>`.
`<body>` contains the main content of the document.