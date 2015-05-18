var db = require('../db.js');

// db esta conectado a la db de mongodb local
//lo cree yo a la riata tutorial adrian mejia
var  PostSchema = new db.Schema({
	trabajo: {type: String, required: true},
	locacion: {type: String, required: true},
	date: {type: Date, required: true, default: Date.now }
});

var Post = db.model('Post', PostSchema);

module.exports = Post;

