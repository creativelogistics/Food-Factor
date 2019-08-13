const express = require('express');
const server = express();
const bodyParser = require('body-parser');
//const morgan  = require('morgan');
const port = 3000 ;
const config = require('../twilio.config.js')
const db = require('../db/index.js')
const Message = require('../db/schema.js')
const client = require('twilio')(config.accountSid, config.token);

server.use(bodyParser());
//server.use(morgan());

server.use(express.static('public'))


server.get('/mostRecent', (req,res) => {
let hey = Message.find({}).limit(10).sort('-date');
hey.exec((err,result)=>{
  console.log('result',result)
  res.send(result)
})

})

server.post('/send',(req,res) => {
  console.log('try')
  let sms = new Message({ 
  user: req.body.recipient,
  message: req.body.message 
  });
  sms.save(function (err, result) {
    if (err) return console.error(err);
    console.log(result)
  });
client.messages
  .create({
     body: `${req.body.message}`,
     from: '+14153017919',
     to: `${req.body.recipient}`
   })
  .then(message => console.log(message.sid));
})
server.listen(port , () => console.log(`listening on port ${port}!`));


