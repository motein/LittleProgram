import mysql.connector

mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord",
  database="mydatabase"
)

mycursor = mydb.cursor()

# Limit the number of records
# mycursor.execute("SELECT * FROM customers1 LIMIT 5")
# myresult = mycursor.fetchall()
# for x in myresult:
#     print(x)
    
# Starting from the third record. 0, .... 
mycursor.execute("SELECT * FROM customers1 LIMIT 5 OFFSET 2")
myresult = mycursor.fetchall()
for x in myresult:
    print(x)