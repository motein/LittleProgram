import mysql.connector

mydb = mysql.connector.connect(
  host="192.168.56.101",
  user="motein",
  passwd="@PassWord",
  database="mydatabase"
)

mycursor = mydb.cursor()

# You can use JOIN instead of INNER JOIN. They will both give you the same result.
sql = "SELECT \
  users.name AS user, \
  products.name AS favorite \
  FROM users \
  INNER JOIN products ON users.fav = products.id"

mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
    
# LEFT JOIN
sql = "SELECT \
  users.name AS user, \
  products.name AS favorite \
  FROM users \
  LEFT JOIN products ON users.fav = products.id"

mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
    
# RIGHT JOIN
sql = "SELECT \
  users.name AS user, \
  products.name AS favorite \
  FROM users \
  RIGHT JOIN products ON users.fav = products.id"

mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)
    
# FULL JOIN
sql = "SELECT \
  users.name AS user, \
  products.name AS favorite \
  FROM users \
  FULL JOIN products ON users.fav = products.id"

mycursor.execute(sql)
myresult = mycursor.fetchall()
for x in myresult:
    print(x)