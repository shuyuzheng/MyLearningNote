# Jinja (神社)

[Jinja](jinja.pocoo.org) is a language used to write html template and it is used in Python micro-framework Flask.

## Basic Syntax

1. `{{ object }}`: place holder. Flask objects can be passed to it and printed to corresponding locations on certain `html` pages.

2. `{% Jinja_command %}`: Jinja has some build-in commands allowing user to set elements dynamically. It includes: condition, loop, block replace,... All these command sentences are wrapped by `{%`

## Command Blocks

### 1. condition

```
{% if condition %}
<tag>{{ object }} something</tag>
{% else %}
<tag>something else</tag>
{% endif %}
```

### 2. loop 
It is used to print a list of elements with the same format.

```
{% for element in list %}
<tag>something will be repeat</tag>
{% endfor %}
```

### 3. Template Inheritance Block

Jinja2 allows us to move the common parts for all pages(like navigation bar) to a _base template_.

1. Write _base template_, save as `app/templates/base.html`

```
Commen content
{% block content %}{% endblock %}
Commen content
```

2. Use _base template_ to generate other pages

```
{% extends "base.html" %}

{% block content %}
  something specific to this page
{% endblock %}
```

### 4 Sub-templates

1. Write a sub-template html file.
2. Using `{% include "sub-template.html" %}` to add the sub-template on the webpage.
