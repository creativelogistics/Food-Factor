const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const port = 3000 ;
const config = require('../twilio.config.js')
//const client = require('twilio')(config.accountSid, config.token);
server.use(bodyParser());
server.use(morgan());

server.use(express.static('public'))
server.get('/mostRecent',(req,res) => {
console.log('hit')
})

server.post('/send',(req,res) => {
    console.log(req.body.message)
// client.messages
//   .create({
//      body: `${req.body.message}`,
//      from: '+14153017919',
//      to: `${req.body.recipient}`
//    })
//   .then(message => console.log(message.sid));

})
server.listen(port , () => console.log(`listening on port ${port}!`));


