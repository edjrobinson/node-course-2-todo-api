var mongoose_lib = require('mongoose');

var User = mongoose_lib.model('User', {
  email: {
    required: true,
    type: String,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};
