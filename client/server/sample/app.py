from flask import Flask, request, redirect, send_from_directory, render_template
from flask_cors import CORS, cross_origin

# Initializing the Flask app
app = Flask(__name__)

# Enabling `Cross Origin Resource Policy` for app
CORS(app=app, support_credentials=True)

# Setting upload route
@app.route("/jsonGetter", methods=["GET"])
@cross_origin(supports_credentials=True)
def send_json():
    pass

def trigger():
    app.run(debug=True)

trigger()