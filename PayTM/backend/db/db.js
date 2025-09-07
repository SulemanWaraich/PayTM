const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 50,
    required: true,

  },
  lastName: {
    type: String,
    maxLength: 50,
    required: true,

  },
  email: {
    type: String,
    unique: true,
    required: true,

  },
  password: {
    type: String,
    minLength: 6,
    required: true,

  }
});

const accountSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports = {
  User,
  Account
};