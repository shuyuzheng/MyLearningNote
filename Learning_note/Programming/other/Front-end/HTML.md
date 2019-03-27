## Tags

### Basic elements

* Headings: `<h1>`, `<h2>`, ...
* paragraph: `<p>`
* comment: `<!--something here-->`
* image tag: `<img src="path" alt="text for screen readers">`
  * `src` is necessary

### Anchors

* external anchor: `<a href="url">word on the screen</a>`
  * `href` is necessary, Target
    * `target="_blank"` this case the linked document to open in a **new window tab**.
* internal anchor: 
  * internal anchor link: `<a href="#target-id">words on the screen<a>`
  * target element: `<name id="target-id">contents</name>`
* nest elements:
  * you can nest `<a>` into `<p>` to create an inline link.
  * you can nest an `<img>` into `<a>` by replacing `words on screen` to make the picture as a link trigger.

### lists

* unordered lists/bullet point style lists:

    ```html
    <ul>
        <li>item1</li>
        <li>item2</li>
    <ul>
    ```

* ordered lists/numbered lists:

    ```html
    <ol>
        <li>item1</li>
        <li>item2</li>
    </ol>
    ```

### Web form

* a form **submit data to a server**: `<form action="url where you want to submit form data"></form>`
  * you can nest the following elements into `<form>` element.
* **text input**: `<input type="text">`
  * add a place holder in the text box: `placeholder="holder words"`
* **submit button**: `<button type="submit">words on screen</button>`
* **radio button**: a series of radio buttons nested in its own `label` element with the same value in their `name` attribute. When select one of them, it will automatically deselect others.

    ```html
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
    ```

* **checkboxes**: a set of check box allows user to select multiple items at once. Its syntax is similar as `radio`.

    ```html
    <label><input type="checkbox" name="personality"> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    ```

* you can make your _radio button_ or _checkbox_ **checked** by add a `checked` attribute in the `<input>` tag.

        ```html
        <label><input type="checkbox" name="personality" checked> Loving</label>
        ```

### Divide your contents

**division element** `<div>`: divide the content into different classes.

## Declare the Doctype of an HTML Document

Declare the document type by `<!DOCTYPE ...>` and wrap your content in `<html>` `</html>` tags

```html
<!DOCTYPE html>
<html>

</html>
```

## Divide documents with <head> and <body>

`<head>` could contain: `<title>`, `<link>`, `<like>`, `<meta>`, `<style>`.
`<body>` contains the main content of the document.

## Applied Accessibility

### For screen readers

1. `<img alt="text" >`: You should set an `alt` attribute to `img` tags, in case the image can not be load on some devices.  
If there already is an element shown on webpage which describing the content of image, you can leave `alt` empty as `""`.

2. Using heading tags to manage your contents, so that some web reading application will recognize them.

3. Wrapping your contents with:
    * `header`: head of the web page. It wraps content that's repeated at the top on multiple pages. It typically contains introductory information or navigation links for its parent tag. 
    * `nav`: It indicate navigation bar.
    * `footer`: Content repeatedly appears at the bottom of multiple pages. It typically contains copyright or contact.
    * `main`: all main contents on the web page.
    * `article`: _independent, self-contained_ content.
    * `section`: _grouping thematically related_ content.
    * `div`: groups _without_ relationship.

4. `figcaption`: wrap a visual representation along with its caption.

```html
<figure>
    <img src="something">
    <br>
    <figcaption>
      texts here
    </figcaption>
</figure>
```

5. Important attributes for `label` tag:
    * `for="id_of_other_element"`: It indicate that the label element is for certain "form control"
    * wrap a set of choices of form together with `<fieldset>` and indicate the question with `<legend>`

    ```html
    <form>
        <fieldset>
            <legend>text</legend>
            <input id="one" type="radio" name="items" value="one">
            <label for="one">Choice one</label>
        </fieldset>
    </form>
    ```

6. `<input type="date>` allows user to input date.
7. `<time datetime="yyy-mm-dd">what will show on web</time>`: restrict the format of certain time. 
8. Some screen reader only read links so wrap some meaningful text with `<a>` tag will be more friendly to these users.

### For keyboard-only users

1. `accesskey` attribute can provide "keyboard shortcuts" for accessing certain element with typing one key.
2. Some elements, like links, form controls, automatically receive _keyboard focus_ when user tabs through a page. You can add this feature to other elements with `tabindex` attribute. It's value is a integer which could be:
    * positive: define the sequence of focussing with tab. Like 1, 2, 3 means 1st, 2nd, 3rd to be access by tabing.
    * negative: The element is _focusable_, but is not reachable by the keyboard.
    * 0: The element can be reached by keyboard.

## Form validation (HTML5 build-in attribute)

When an element is **valid**:

* The element matches the `:valid` CSS pseudo-class. (edit the style)
* If user try to send the data, the browser will submit the form.

When an element is **invalid**:

* The element matches the `:invalid` CSS pseudo-class.
* If user try to send the data, the browser will **block** the form and display an error message.

### Attributes

* `required` atrribute _without_ any values. If the input is empty, it will show error.
* `pattern="<Regex>"` check whether the input matches the `Regex`.
* `minlength="<n>"` or `maxlength="<n>"` constrains the length of entry.
* For `<input type="numer">` tag: `min` and `max` attribute constrian the range of number input.
