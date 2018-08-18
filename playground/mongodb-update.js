// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MondoDB server');
  const db = client.db('TodoApp');

//   db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5b787f7983f2b459982b0e4b')},
// {
//   $set: {
//     completed: true
//   }
// },
// {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
//   client.close();
// });

  db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b77bd7ae8ae050cf5b824c4')},
{
  $set: {
    name: 'Ed Robinson'
  },
  $inc: {
    age: 1
  }
},
{
  returnOriginal: false
}).then((result) => {console.log(result);});

});
