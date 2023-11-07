import mysql.connector
from mysql.connector import errorcode
import os

user = os.getenv("USER")
database = os.getenv("DATABASE")
password = os.getenv("PASSWORD")
host = os.getenv("HOST")

def connect_to_db():
    try:
        conn = mysql.connector.connect(
                user=user, 
                database=database,
                password=password,
                host=host
            )
        
        print("Connected")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
            
    return conn