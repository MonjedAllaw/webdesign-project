
from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/')  # decorator
def home():
    return render_template("home.html")

@views.route('/oneplayer')
def oneplayer():
    return render_template("oneplayer.html")

@views.route('/twoplayers')
def twoplayers():
    return render_template("twoplayers.html")

@views.route('/about')  # decorator
def about():
    return render_template("about.html")