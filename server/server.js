require('./config/config.js');

const _ = require('lodash');

const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');

const {ObjectID} = require('mongodb');

const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

const port = process.env.PORT;

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

app.patch('/todos/:id', (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  var {id} = req.params;

  var body = _.pick(req.body, ['text', 'completed']);

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
  .then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send();
  });

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
