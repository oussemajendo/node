var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('<h1>Hello Node!</h1>'); //write a response to the client
  res.end(); //end the response
  console.log('server is worked')
}).listen(3000); //the server object listens on port 3000