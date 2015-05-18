var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//Post es la basedeDatos
var Post = require('./models/post.js');

//middlewear
app.use(bodyParser.json());

//define get
app.get('/api/posts', function(req, res, next){
	// res.json([
	// 	{
	// 		trabajo: 'sexo',
	// 		locacion: 'putas barrio'
	// 	}
	// ])
	Post.find(function(err, posts){
		if(err){return next(err)}
		
		res.json(posts);	
	});
	
});

//define post
app.post('/api/posts', function(req, res, next){
	var post = new Post({
		trabajo: req.body.trabajo,
		locacion: req.body.locacion
	});
	post.save(function(err, post){
		if(err) { return next(err); }
		//depricated segun libro mean 
		// res.json(201, post);
		res.status(201).json(post);
		
	});
});


//listen to port *****
app.listen(3000, function(){
	console.log('Server escuchando en', 3000)
});