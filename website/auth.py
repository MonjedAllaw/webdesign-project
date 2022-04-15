from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template("login.html")

def logout():
    return "<p>logout</p>"
@auth.route('/sign_up')
def sign_up():
    return render_template("signup.html")