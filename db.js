var mongoose = require('mongoose');

// conectando a db llamada domicil
mongoose.connect('mongodb://localhost/domicil', function(){
	console.log('mongodb esta conectado');
});

// lo voy a tomar desde el modelo models/post.js
module.exports = mongoose;
