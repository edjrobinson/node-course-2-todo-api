const {mongoose} = require('./../server/db/mongoose.js');

const {Todo} = require('./../server/models/todo.js');

const {User} = require('./../server/models/user.js');

const {ObjectID} = require('mongodb');

// var id ='5b7d1285f436551bea437484x';
//
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos: ', todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log('Todo: ', todo);
// // });
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.findById(id)
// .then((todo) => {
//   if (!todo) {
//     return console.log('_id not found');
//   }
//   console.log('Todo by _id: ', todo);
// })
// .catch((e) => {
//   console.log(e);
// });
var userId = '5b79bcd95634bf124dd933d8';
User.findById(userId)
.then((doc) => {
  if (!doc) {
    return console.log(`User not found for ${userId}`);
  }
  console.log('User found:', doc);
})
.catch((err) => {
  console.log(err);
});
