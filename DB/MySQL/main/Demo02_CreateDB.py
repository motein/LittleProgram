import mysql.connector

mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord"
)

mycursor = mydb.cursor()
mycursor.execute("CREATE DATABASE mydatabase")
mycursor.execute("SHOW DATABASES")

for x in mycursor:
    print(x)
    
mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord",
  database="mydatabase"
)

print(mydb)