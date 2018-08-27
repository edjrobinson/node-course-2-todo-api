var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {ObjectID} = require('mongodb');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); //get the body parsed as JSON and stored as req.body

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  Todo.findById(req.params.id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  })
  .catch((e) => {
    console.log(e);
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(req.params.id)
  .then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  })
  .catch((e) => {
    console.log(e);
    res.status(400).send();
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
