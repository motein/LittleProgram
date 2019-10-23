import mysql.connector

mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord",
  database="mydatabase"
)

mycursor = mydb.cursor()

# sql = "SELECT * FROM customers1 ORDER BY name"
# mycursor.execute(sql)
# myresult = mycursor.fetchall()
# for x in myresult:
#     print(x)
    
# DESC
sql = "SELECT * FROM customers1 ORDER BY name DESC"
mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)