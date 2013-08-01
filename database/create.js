var fs=require("fs");
var uuid = require('node-uuid');
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://localhost:7474');


var log = function (next) {    // ...this is what actually persists.

	return function(err, node){
    	if (err) {
        	console.log('Error saving new node to database:', err);
    	} else {
        	console.log('Node saved to database with id:', node.id);
    	}
    	next();
	}

};

db.query("START r=relationship(*) delete r;", {}, log(function(){
	db.query("START n=node(*) delete n;", {}, log(function(){
    fs.readFile("create.cql", 'utf8', function(err, data) {
		  if (err) throw err;
  			console.log(data);
  			db.query(data, {}, log(function(){}));
		});
	}));	
}));

/*var tshirt = db.createNode({name: 'tshirt', description :'un tshirt'});
var marque = db.createNode({name: 'Nike'});

tshirt.createRelationshipTo(marque,"EST_DE_MARQUE");

tshirt.save(log);
marque.save(log);*/




