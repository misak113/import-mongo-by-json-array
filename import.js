
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

var collectionName = process.argv[2];

var docsJson = fs.readFileSync(__dirname+'/'+collectionName+'.json');

var docs = JSON.parse(docsJson);

MongoClient.connect('mongodb://127.0.0.1:27017/myretail', function(err, db) {
	if(err) throw err;

	var collection = db.collection(collectionName);

	docs.forEach(function (doc) {
		collection.insert(doc, function(err, docs) {
			console.log('inserted doc');
		});
	});
})