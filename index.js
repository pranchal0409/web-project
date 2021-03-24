var express=require("express"); 
var bodyParser=require("body-parser"); 
var port = 3000;

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express() 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/contactus', function(req,res){ 
	var email = req.body.email1;
	var name = req.body.name1;
	var msg = req.body.msg1;

	var data = {

		"email" : email1,
		"name" : name1,
		"msg" : msg1
	}
	db.collection('details1').insertOne(data,function(err,collection){
		if (err) throw err;
		console.log("Record inserted Successfully"); 
	});return res.redirect('success.html');
})

app.get('/',function(req,res){ 
res.set({ 
	'Access000)-control-Allow-Origin': '*'
	}); 
return res.redirect('index.html'); 
}).listen(3000)

console.log("server listening at port 3000");

app.post('/news', function(req,res){ 
	var email = req.body.email2;

	var data = {

		"email" : email2
	}
	db.collection('details2').insertOne(data,function(err,collection){
		if (err) throw err;
		console.log("Record inserted Successfully"); 
	});return res.redirect('success.html');
})

app.get('/',function(req,res){ 
res.set({ 
	'Access000)-control-Allow-Origin': '*'
	}); 
return res.redirect('index.html'); 
}).listen(3000)

console.log("server listening at port 3000");

app.listen(port, () => {
  console.log("Server listening on port " + port);
});