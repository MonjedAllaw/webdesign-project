from flask import Flask

# first step to create a flask app


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'dhdhdhdhdhddhdh'

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    return app
