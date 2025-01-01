# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the MongoDB $inc operator. The $inc operator is used to increment or decrement a numeric field. However, if the field does not exist, it will not be created. This can lead to unexpected behavior if you are expecting the $inc operator to create the field if it doesn't exist.

## Bug
The bug is in the following line of code:
```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
```
If the field does not exist, the update operation will not create the field. To resolve this, you can use the $setOnInsert operator to create the field if it doesn't exist.