const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const port = 3000 ;
const config =require('../twilio.config.js')
const client = require('twilio')(config.accountSid, config.token);

server.use(bodyParser());
// server.use(express.static('public'))

server.post('/sms', (req,res) => {
let target = req.body.number
client.messages
  .create({
     body: `${req.body.message}`,
     from: '+14153017919',
     to: `${target}`
   })
  .then(message => console.log(message.sid));
  //.then() save to db
})
 //server.get({})

server.listen(port , () => console.log(`listening on port ${port}!`));


