const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const port = 3000 ;
const config = require('../twilio.config.js')

const Message = require('../db/schema.js')
const client = require('twilio')(config.accountSid, config.token);

server.use(bodyParser());
//server.use(morgan());

server.use(express.static('public'))
//server.use(morgan())

server.get('/mostRecent', (req,res) => {
  let hey = Message.find({}).limit(10).sort('-date');
  hey.exec((err,result)=>{
    console.log('result',result)
    res.send(result)
  })
})

server.post('/send',(req,res) => {
  let concat = `${req.body.user} says ${req.body.message}`
  let sms = new Message({ 
    user: req.body.recipient, 
    message: concat  
  });
  sms.save(function (err, result) {
    if (err) return console.error(err);
    console.log(result)
  });
  client.messages
    .create({
     body: concat,
     from: '+14153017919',
     to: `${req.body.recipient}`
    })
    .then(message => console.log(message.sid));
})

server.delete('/sms/:id', (req,res) => {
  Message.deleteOne({_id: '5d5238980d4b13256f7291ce'},(err,result) => {
    if (err){
      console.log(err);
      res.status(204).end();
    }console.log('success', result)
    res.status(200).end();
  })
})
server.put('/change/:id',(req,res) =>{
  console.log('heye',req.params.id,req.body.message)
  Message.findByIdAndUpdate({_id: req.params.id},false,{message: req.body.message, user: req.body.user}, (err,result)=>{
    if (err){
      console.log(err);
      res.status(204)
    }else {
      console.log('eee')
      res.status(200)
    }

  })
})
server.listen(port , () => console.log(`listening on port ${port}!`));


