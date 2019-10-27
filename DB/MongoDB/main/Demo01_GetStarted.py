import pymongo

# defaults to port 27017
myclient = pymongo.MongoClient("mongodb://admin:myadminpassword@192.168.56.101:27017/admin")
# mydb = myclient["mydatabase"]
print(myclient.list_database_names())