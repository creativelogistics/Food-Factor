const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const port = 3000 ;

const client = require('twilio')(accountSid, authToken);
server.use(bodyParser());
server.use(morgan());

server.use(express.static('public'))
server.get('/mostRecent',(req,res) => {
    

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15017122661',
     to: '+15558675310'
   })
  .then(message => console.log(message.sid));

})
server.listen(port , () => console.log(`listening on port ${port}!`));


