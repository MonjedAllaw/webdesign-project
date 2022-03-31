from flask import Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return "<p>login</p>"
@auth.route('/logou')
def logout():
    return "<p>logou</p>"
@auth.route('/sign_up')
def sign_up():
    return "<p>sign up</p>"