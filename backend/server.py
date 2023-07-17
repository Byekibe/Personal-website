from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS
load_dotenv()
import os

PORT = os.getenv('PORT')

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return { "msg": "Home" }


@app.route("/contact")
def contact():
    return { "msg": "Contact" }

@app.route("/date_year")
def date_year():
    return { "msg": "Year" }

@app.route("/mail", methods=["GET", "POST"])
def mail():
    contact_name = request.json.get("name")
    email = request.json.get("email")
    message = request.json.get("message")
    print(contact_name, email, message)
    return { "msg": f"Thanks {contact_name} your message has been sent!" }


if __name__=="__main__":
    app.run(port=PORT, debug=True)