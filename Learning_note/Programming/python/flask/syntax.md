## Use template in routes.py
def index():
`return render_template('template.html', object1='value1', object2='value2')`

## Basic syntax

Flask using the templates written with [Jinja](jinja.pocoo.org)

1. `{{ object }}`: place holder. It will be replaced by the `value` of the object passed by `render_template()` function.
2. condition

```
{% if condition %}
<tag>{{ object }} something</tag>
{% else %}
<tag>something else</tag>
{% endif %}
```

2. loop (print repeat elements on the webpage, for example comments from visitors)

```
{% for element in list %}
<tag>something will be repeat</tag>
{% endfor %}
```

## Template Inheritance

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


