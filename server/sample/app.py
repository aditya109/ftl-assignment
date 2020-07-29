
try:
    from flask import Flask
    from flask_cors import CORS, cross_origin
    import helper
except Exception as e:
    print(e)

# Initializing the Flask app
app = Flask(__name__)

# Enabling `Cross Origin Resource Policy` for app
CORS(app=app, support_credentials=True)

# Setting upload route
@app.route("/jsonGetter", methods=["GET"])
@cross_origin(supports_credentials=True)
def get_json():
    JSON = helper.json_provider()
    return JSON
def trigger():
    app.run(debug=True)

trigger()