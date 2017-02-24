var express = require('express');
var app = express();

app.use(express.static(__dirname+'/bower_components'));
app.use(express.static(__dirname+'/admin/public'));
app.use(express.static(__dirname+'/cliente'));

app.get('/',function(req,res){
  res.sendFile(__dirname+'/cliente/index.html');
})

app.get('/admin',function(req,res){
 res.sendFile(__dirname+'/admin/public/home.html');
});



var port = 3000;
app.listen(port,function(){
  console.log('listening on port'+port);
});
