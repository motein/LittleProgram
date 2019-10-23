import mysql.connector

mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord",
  database="mydatabase"
)

mycursor = mydb.cursor()

# mycursor.execute("SELECT * FROM customers1")
# myresult = mycursor.fetchall()
# for x in myresult:
#     print(x)
    
# mycursor.execute("SELECT name, address FROM customers1")
# myresult = mycursor.fetchall()
# for x in myresult:
#     print(x)
    
mycursor.execute("SELECT * FROM customers1")
myresult = mycursor.fetchone() # Return the 1st row of results
print(myresult)