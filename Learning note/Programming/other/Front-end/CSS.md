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

* **Inline** setting will over-write the `<style>` tag setting.

# Attribute selectors
## 1. Class

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

3. Apply multiple classes to one element: `<h2 class="class1 class2">...</h2>`
## 2. id
* "id" should be **unique**. 
* "id" is **not reusable** and should only be applied to one element.
* id is **higher** specificity than a _class_.

* set an "id" to element, just add it as an attribute in the start tag: `<tag id="id_name">`.

* Use id to style an element: Putting a `#` in front of their names. Like `#id_name{ property: value; }`

## 3. attribute selector
* `[attr=value] { properties }`: 

## 4. pseudo-classes
* `:hover`: select the status of element when user hover courser over it.
# Properties

## font properties

1. `font-size`: define the size of the text by pixels, like `16px`

2. `font-family: FAMILY_NAME, GENERIC_NAME`: set the style of the font
    * `FAMILY_NAME` is the name of font you want to use, like `sans-serif`. They are **case sensitive** and need **quotes** to wrap it, if there is a space in the name.
    * `GENERIC_NAME` is a _fallback_ font in case the other specified font is not available. They are **case insensitive** but need **quotes** when there are spaces.
    * **Import** fronts from external websites, like [Google Fonts](https://fonts.google.com/): 
        `<link href="URL_to_the_webpage_of_font" rel="stylesheet" type="text/css">

3. `font-weight`: sets how thick or thin characters are in a section of text.

4. `line-height`: the height of each line.

# element properties
1. `width`: setting images' width by pixels, like `500px`

2. `background-color`: specify the color of the back ground.

3. `color`: change the color of elements
    * Inline attribute `style`, start with `:` end with `;`: `<h2 style="color: blue;">...</h2>`

    * In `<style>` tag, at the top of the document, enclose the `properties: value;` pairs with `{}`:

    ```
    <style>
        h2 {color: red;}
    </style>
    ```


## Things surrounding elements

All HTML elements are essentially little **rectangles**.

Three properties control the space that surrounds each HTML element: `padding`, `margin`, `border`.

### 1. Padding

* `padding: 20px;`: controls the amount of space between the element's _content_ and `border`.
* specify the padding on each of the element's sides:
    * `padding-top`
    * `padding-right`
    * `padding-left`
    * `padding-bottom`
* **Clockwise notation** to specify the padding:
`padding: top right left bottom`

### 2. margin

* `margin: 20px;`: controls the amount of space between an element's `border` and _surrounding elements_.
    * Setting margin as negative will enlarge it. `margin: -15px`
* Specify the margin on each of the element's sides:
    * `margin-top`
    * `margin-left`
    * `margin-right`
    * `margin-bottom`
* **Clockwise notation** to specify the margin:
`margin: top right left bottom`

### 3. border

* `border-`: add **border** to your elements and setting the attributes with separated properties below.
    * `border-color`: define the color of border.
    * `border-width`: define the with of the border by pixels.
    * `border-style`: define the type of the border, like `solid`
    * `border-radius`: define the corners of the border by pixels or percentages (50% turns the image into circular).

# Units

## Absolute length
* `px`: pixels
* `mm`: millimeters
* `in`: inches

## Relative length
* `em`: based on the size of an element's _front_.
* `rem`: 

## Hexadecimal code color
It using the **RGB color system**. Each color is mixed with three colors Red, Green, Blue and the proposition of each color is represented by two digits (a Hexadecimal number). Lowest is `00` and highest is `FF`

**Abbreviated Hex Code** can be used if _one_ digit is enough to represent the proposition of colors.

* Hex Code: `color: #000000;`
* Shorten Hex Code: `color: #000;`

## RGB values
Range: `rgb(0, 0, 0)` to `rgb(255, 255, 255)`

## RGBA values
`rgba()`: red, green, blue, opacity. Range for `opacity`: 0.1 - 1.0

`opacity`: a property for adjusting the opacity or transparency.

# 'body' element
* There is a `body` element for every HTML page.
* It can be styled just like any other HTML elements.
* All other elements will _inherit_ the style of `body`.

# Override order of styles
* _latter_ entered overrides _earlier_ ones.
* `class` overrides `body`.
* `id` overrides `class` .
* `inline style` overrides `id`.
* properties with **key word** `important` overrides all definitions: `color: red !important`. 

# CSS variable
* Create variable: `--variable-name: property;`
* Apply variable: `element: var(--variable-name);`
* Fallback of the variable: `element: var(--variable-name) property;`. If the value of the variable does not work, `property` will be used to the element. This can be used for _debug_.

# Align the text
`text-align:` 
* `justify;` all lines of text **except last line** to meet right and left side.
* `center;` centers the text
* `right;` right-aligns the text
* `left;` left-aligns the text (**default**)

# Special tags for text style 
* `<strong>`: bold text style
* `<u>`: underline
* `<em>`: italic
* `<s>`: strike out.
* `<hr>`(**self-closing tag**): a horizontal line.

# Box shadow
`box-shadow: <offset-x> <offset-y> <blur-radius> <spread-radius> <color>`:

* `<offset-x>`: how far extents in horizontal direction.
* `<offset-y>`: how far extents in vertical direction.
* `<blur-radius>`: (_optional_)
* `<spread-radius>`: (_optional_)
* `<color>`: the color of shadow

# Text transform
`text-transform`:
* `lowercase;`
* `uppercase;`
* `capitalize;`: first letter in each word change into uppercase.
* `initial;`: first letter in whole line change into uppercase.
* `inherit;`: Use the `text-transform` value from the parent element.
* `none`: (_default_) no transform.

# Position

**normal flow**
* Change the value of `position` to `relative` and followed with offset properties `left`, `right`, `top`, `bottom`. It will make the element's position 

# Applied Accessibility (for screen readers)
1. Set the element only visible for screen reader: `overflow: hidden;`
    * `display: none;` and `visibility: hidden;` will _also hide_ content for screen reader.
