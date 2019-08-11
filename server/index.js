const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan  = require('morgan');
const port = 3000 ;


server.use(bodyParser());
server.use(morgan());

server.use(express.static('public'))

server.listen(port , () => console.log(`listening on port ${port}!`));


