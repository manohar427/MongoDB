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
  "sname":"Manohar",
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

--And Operator
db.student.find(
 {
    "sname" : "Manohar", 
    "age" : "10"
 }
)
//Or operator
db.student.find(
 {
   $or :[{"sname" : "Manohar"},{ "age" : "14"}]
 }
)

//And and Or Operator
db.student.find(
   {
     "sname" : "Manohar", $or:[{"age":"10"},{"age":"14"}]
   }
)

//Update Operation
db.student.update(
   {
     "_id" : ObjectId("5aae0de2e768a7dcd3498263")
   },
   {
    $set:{"age":"110000"}
   }
)
//multi doc update
db.student.update(
   {
     "sname" : "Manohar"
   },
   {
    $set:{"age":"520"}
   },
    {multi:true}
)
db.student.find()

db.student.save({ 
    "_id" : ObjectId("5aae0ddce768a7dcd3498261"), 
    "sno" : "100", 
    "sname" : "Manohar", 
    "age" : "511"
})

//Delete documents
db.student.remove(
 {
   "_id" : ObjectId("5aae0ddce768a7dcd3498261")
 }
)

db.student.remove(
 {
   "sname" : "Manohar"
 },1
)

db.student.find()

//Projection ,selecting necessary data
db.student.find({},{"sname":1,"_id":0})

--Using Sort, Skip, and Limit in MongoDB
db.student.find({},{"sno" :1,"sname":1,"_id":0})
db.student.find({},{"sno" :1,"sname":1,"_id":0}).limit(2)
db.student.find({},{"sno" :1,"sname":1,"_id":0}).skip(2)
db.student.find({},{"sno" :1,"sname":1,"_id":0}).sort({"sno":-1})

//MongoDB Indexing
use temp

for(i=0;i<100000;i++){
  db.tempColl.insert({"id":i,"name":"Mark"});
}
 db.tempColl.remove()
  db.tempColl.find()

  db.tempColl.find({"id":99999})
    db.tempColl.findOne({"id":99999})
db.tempColl.ensureIndex({"id":1})
db.tempColl.dropIndex({"id":1})

//MongoDB Aggregation function
db.student.find()
db.student.insert(
[{
  "sno":"100",
  "sname":"Ram",
  "age":"13",
  "gender":"Male"
},
{
  "sno":"101",
  "sname":"Kiran",
  "age":"15",
  "gender":"Male"
},
{
  "sno":"102",
  "sname":"Kumar",
  "age":"14",
  "gender":"FeMale"
},
{
  "sno":"103",
  "sname":"Jun",
  "age":"18",
  "gender":"Male"
},
{
  "sno":"104",
  "sname":"Roy",
  "age":"16",
  "gender":"Male"
},
{
  "sno":"105",
  "sname":"Gre",
  "age":"13",
  "gender":"FeMale"
}
]
)
db.student.find()
db.student.aggregate([{$group:{_id:"$gender",MyResult:{$sum:1}}}])
db.student.aggregate([{$group:{_id:"$gender",MyResult:{$max:"$age"}}}])
db.student.aggregate([{$group:{_id:"$gender",MyResult:{$min:"$age"}}}])