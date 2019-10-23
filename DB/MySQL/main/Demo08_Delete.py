import mysql.connector

mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord",
  database="mydatabase"
)

mycursor = mydb.cursor()

sql = "DELETE FROM customers1 WHERE address = 'Mountain 21'"
mycursor.execute(sql)
mydb.commit()
print(mycursor.rowcount, "record(s) deleted")

# Prevent SQL Injection
# sql = "DELETE FROM customers1 WHERE address = %s"
# adr = ("Yellow Garden 2", )
# mycursor.execute(sql, adr)
# mydb.commit()
# print(mycursor.rowcount, "record(s) deleted")