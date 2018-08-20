var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); //get the body parsed as JSON and stored as req.body

app.listen(3000, () => {
  console.log('Started on port 3000');
});

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    console.log('Todo saved: ', doc);
    res.send(doc);
  }, (err) => {
    console.log('Could not save Todo: ', err);
    res.status(400).send(err);
  });
});