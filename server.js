var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index');
});

server.listen(process.env.PORT || 3000, function() {
  console.log("Server listening on *");
});

module.exports = server;





// // SO Question

// http.listen(3000, function(){
//  console.log('listening on *:3000');
// });

// // SO Answer

// http.listen(process.env.PORT || 3000, function(){
//   console.log('listening on', http.address().port);
// });

// // Original Implementation

// server.listen(3000, function() {
//   console.log("Server listening on port 3000");
// });

// // Trying Implementation

// server.listen(process.env.PORT || 3000, function() {
//   console.log("Server listening on *");
// });