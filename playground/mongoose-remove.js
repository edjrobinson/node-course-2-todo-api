const {mongoose} = require('./../server/db/mongoose.js');

const {Todo} = require('./../server/models/todo.js');

const {User} = require('./../server/models/user.js');

const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5b83c42883f2b459982b4c4a').then((doc) => {
  console.log(`Removed doc is: ${doc}`);
});
