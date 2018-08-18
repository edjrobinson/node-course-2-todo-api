// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MondoDB server');
  const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //   completed: false
    // }).toArray().then((docs) => {
    //   console.log('ToDos:');
    //   console.log(JSON.stringify(docs, undefined, 2));
    //   client.close();
    //
    // }, (err) => {
    //   console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Users').find().count().then((count) => {
    //   console.log(`ToDos count: ${count}`);
    //   client.close();
    //
    // }, (err) => {
    //   console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({
      name: 'Ed Robinson'
    }).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
      client.close();
    }, (err) => {
      console.log('Some error occurred: ', err);
    });

});
