from flask import Flask
from dotenv import load_dotenv
load_dotenv()
import os

PORT = os.getenv('PORT')

app = Flask(__name__)

@app.route("/")
def home():
    return { "msg": "Home" }


@app.route("/contact")
def contact():
    return { "msg": "Contact" }

@app.route("/date_year")
def date_year():
    return { "msg": "Year" }


if __name__=="__main__":
    app.run(port=PORT, debug=True)