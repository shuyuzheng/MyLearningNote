# CSS basic
**Cascading Style Sheet(CSS)**: tells the browser how to display the contents written in the HTML documents.

**case-sensitive** language

1. What can it control:
    * color
    * fonts
    * positioning
    * spacing
    * sizing
    * decorations
    * transitions

2. How to use it:
    * Inline used with `style` attribute of tags in HTML documents.
    * `<style>` tags in HTML document.
    * Separated CSS document.

3. The basic idea behind CSS: 
    * using a **selector** to target the elements in **DOM(Document Object Model)**
    * applying a variety of attributes to the elements.

# Color

* Inline attribute `style`, start with `:` end with `;`:

`<h2 style="color: blue;">...</h2>`

* In `<style>` tag, at the top of the document, enclose the `properties: value;` pairs with `{}`:

```
<style>
    h2 {color: red;}
</style>
```

* **Inline** setting will over-write the `<style>` tag setting.

# Class

The style setting for class can be **reused** to the elements that was sort to this class.

1. Declaration

```
<style>
    .classname {
        property: value;
    }
</style>
```

2. Application

```
<h2 class="classname">...</h2>
```

# Properties
1. `font-size`: define the size of the text by pixels, like `16px`

2. `font-family: FAMILY_NAME, GENERIC_NAME`: set the style of the font
    * `FAMILY_NAME` is the name of font you want to use, like `sans-serif`. They are **case sensitive** and need **quotes** to wrap it, if there is a space in the name.
    * `GENERIC_NAME` is a _fallback_ font in case the other specified font is not available. They are **case insensitive** but need **quotes** when there are spaces.
    * **Import** fronts from external websites, like [Google Fonts](https://fonts.google.com/): 
        `<link href="URL_to_the_webpage_of_font" rel="stylesheet" type="text/css">

3. `width`: setting images' width by pixels, like `500px`

4. `border-`: add **border** to your elements and setting the attributes with separated properties below.
    * `border-color`: define the color of border.
    * `border-width`: define the with of the border by pixels.
    * `border-style`: define the type of the border, like `solid`
    * `border-radius`: define the corners of the border by pixels or percentages (50% turns the image into circular).

5. `background-color`: specify the color of the back ground.

# Set a "id" of a element

* "id" should be **unique**.