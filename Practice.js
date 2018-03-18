--Create db and drop db
use one
db
show dbs

db.myCollection.insert({"name":"Manohar"})

db.dropDatabase()

--Creating Collection and drop
db.createCollection("MyCollection1")
db.MyCollection1.insert({"college":"ST JOhn's"})
db.MyCollection2.insert({"college":"ST JOhn's"})
show collections
db.MyCollection1.drop()

--Inserting data
use school
db.student.insert({
  "sno":"100",
  "sname":"Manohar",
  "age":"10"
})

db.student.insert({
  "sno":"100",
  "sname":"Manohar",
  "age":"10",
  "address":"Bangalore,India"
})

db.student.insert(
[{
  "sno":"103",
  "sname":"Manohar3",
  "age":"13"
},
{
  "sno":"104",
  "sname":"Manohar4",
  "age":"14"
}]
)

--Reading data from Collection
use school
db.student.find()
db.student.find().pretty()
db.student.findOne()
--Conditional Query
db.student.find(
 {
 "sno":"101"
 }
)

db.student.find(
 {
 "sno":{ $lte : "101"}
 }
)

db.student.find(
 {
 "sno":{ $ne : "100"}
 }
).pretty()
