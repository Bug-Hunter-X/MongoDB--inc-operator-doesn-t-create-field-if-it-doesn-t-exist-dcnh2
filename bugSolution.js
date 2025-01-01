```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{
  $set: { field: 0 },
  $inc: { field: value },
});
//Alternative using $inc and $setOnInsert together
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{
  $inc: {field: value},
  $setOnInsert: {field: value}
});
```