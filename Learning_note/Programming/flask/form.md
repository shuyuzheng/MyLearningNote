## Installation

Flask-WTF is a thin wrapper around the [WTForm](https://wtforms.readthedocs.io/).

```
(venv) $ pip install flask-wtf
```

## Configuration

1. Define variables as keys in `app.config` (which behaves as a dictionary) in `app/__init__.py` file

```
app = Flask(__name__)
app.config['SECRET_KEY'] = 'you-will-never-guss'
```

2. Define config in a separate file `config.py`

In `config.py`

```
import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
```

In `__int__.py`

```
from flask import Flask
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

from app import routes
```


