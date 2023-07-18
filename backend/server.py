from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS
load_dotenv()
import datetime as dt
import os
import smtplib

PORT = os.getenv('PORT')
MY_EMAIL = os.getenv('EMAIL')
PASSWORD = os.getenv('PASSWORD')

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
    now = dt.datetime.now()
    year = now.year
    print(year)
    return { "msg": year }

@app.route("/experience")
def experience():
    python_exp = 5
    js_exp = 4
    return {"python_exp": python_exp, "js_exp": js_exp }

@app.route("/mail", methods=["GET", "POST"])
def mail():
    contact_name = request.json.get("name")
    email = request.json.get("email")
    message = request.json.get("message")
    print(contact_name, email, message)
    password = PASSWORD
    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(user=MY_EMAIL, password=password)
        connection.sendmail(
            from_addr=MY_EMAIL,
            to_addrs=MY_EMAIL,
            msg=f"Subject: FROM {contact_name} \n\n {message}"
        )
    return { "msg": f"Thanks {contact_name} your message has been sent!" }


if __name__=="__main__":
    app.run(port=PORT, debug=True)