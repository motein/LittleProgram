import mysql.connector

mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord",
  database="mydatabase"
)

mycursor = mydb.cursor()

# sql = "DROP TABLE customers"
# mycursor.execute(sql)

# Drop Only if Exist
sql = "DROP TABLE IF EXISTS customers"
mycursor.execute(sql)