// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MondoDB server');
  const db = client.db('TodoApp');

  // //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  //   client.close();
  // });

  // //deleteOne
  // db.collection('Todos').deleteOne({text:'summat identical'}).then((result) => {
  //   console.log(result);
  // });

  // //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  //   client.close();
  // });

  // db.collection('Users').deleteMany({name:'Ed Robinson'}).then((result) => {
  //   console.log(result);
  //   client.close();
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b77bdc9bc68ad0cf690e2dd')}).then((result) => {
    console.log(result);
    client.close();
  });

});
