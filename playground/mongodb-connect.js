// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MondoDB server');
  const db = client.db('TodoApp');

  //now add something to the db
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  //add something to a Users collection
  db.collection('Users').insertOne({
    name: 'Ed Robinson',
    age: 42,
    location: 'Bembridge'
  }, (err, results) => {
    if (err) {
      return console.log('Something went wrong with adding the user', err);
    }
    console.log(JSON.stringify(results.ops[0], undefined, 2));
    console.log('ID of that is: ', results.ops[0]._id);
    console.log('Timestamp from that ID is:', results.ops[0]._id.getTimestamp());

    var user = {
      name: 'EdR',
      age: 42
    };

    //destructure the user object to get a name variable
    var {name} = user; //this creates a variable called 'name' with the value from user.name
    console.log('Destructured name variable is... ', name, '!');

  });

  client.close();

  //ObjectID stuff
  var obj = new ObjectID();
  console.log("New ObjectID has value of ", obj);
});
