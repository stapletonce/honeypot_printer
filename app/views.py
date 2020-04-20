# views.py

from flask import render_template

from app import app

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/login', )
def about():
    return render_template("about.html")

@app.route('/<path:path>')
def send(path):
  return app.send_static_file(path)  

@app.route('/login', methods=['GET', 'POST'])
def login():
    return render_template("index.html") 