var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

let messages = new mongoose.Schema({
  user :  String,
  message : String,
  date: { type: Date, default: Date.now }
  }
);

let Message = mongoose.model('Message', messages);

module.exports = Message;

