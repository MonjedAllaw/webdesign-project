from website import create_app
# we can do this bc website is now a python package since we added init.py file

app = create_app()
if __name__ == '__main__':  # only if we run this file directaly
    app.run(debug=True)  # run a web server
