
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

@views.route('/about')
def about():
    return render_template("about.html")

@views.route('/rps')
def rps():
    return render_template("RPS.html")

@views.route('/matching')
def matching():
    return render_template("matching.html")

@views.route('/xo')
def xo():
    return render_template("xo.html");