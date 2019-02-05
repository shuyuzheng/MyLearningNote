# Introduction to "flowchart.js"

Shuyu Zheng | 2019.02.01

[Official website for "flowchart.js"](http://flowchart.js.org/)

> Draws simple SVG flow chart diagrams from textual representation of the diagram.

**flowchart.js** is a kind of command line based language used to create flow chart diagrams to _SVG_ form. It can be used in _markdown_ files if your markdown editor supports it. For example, the one I'm using: [Visual Studio Code](https://marketplace.visualstudio.com/vscode) +
[Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/)

## Syntax

### Icons or modules

| command  |  diagrams |
| --- | --- |
| `{variable}=>start: {text}` |  start icon (round corner rectangle) |
| `{variable}=>end: {text}` | end icon (round corner rectangle) |
| `{variable}=>operation: {text}` | operation icon (rectangle) |
| `{variable}=>condition: {text}` | Decision icon (diamond) |
| `{variable}=>inputoutput: {text}` | input or output icon (parallelogram)|
| `{variable}=>subroutine: {text}` | subroutine icon (rectangle) |
| `{variable}=>parallel: {text}` | parallel tasks icon (rectangle) |

`{variable}`: The id (or name) for a module. It will be used in the _flow control_ commands.

`{text}`: The content printed on the icon in final diagram. You can also add _hyperlinks_ to the module with `>http://www.your.links`.

### Flow controls

| command | diagram |
| --- | --- |
| `{variable}->{variable}` | flow direction indicator (arrows linking each icons)|
| `{variable}({direction})->{variable}` | `{direction}` controls the direction of the arrows will point in your diagram. Available values are: `left` and `right` |
| `{condtion_variable}({alternative})->{variable}` | `{alternative}` indicate different decisions made uder the condition. Available values are: `yes` and `no` |
| `{parallal_variable}(path{n})->{variable}` | `path{n}` indicates different paths the parallal task will go. You can define `path1`, `path2`,... |

### Tips

1. Although you can make `{varibles}` whatever you want, it is always good to make them identical and meaningful, so that you can easily to make out which module it refers to.

```
Good:
st=>start: start
op=>operation: my oeration
ed=>end: end

Bad:
1=>start: start
2=>operation: my oeration
3=>end: end
```

2. Flow command can be chained into one line, like this:

```
st->op->ed
```

or you can seperate them into different lines, like this:

```
st->op
op->ed
```
