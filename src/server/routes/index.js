var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017';
var db_name = 'phonebook';

router.get('/', function (req, res, next){
    var resultArray = [];
    mongo.connect(url, function (err, client) {
        if (err) throw err;
        
        var db = client.db(db_name);
        var cursor = db.collection('users').find();

        cursor.forEach ( function (doc, err) {
            var item = new Object();
            if (err) throw err;
            item.name = doc.name
            
            db.collection("phone").findOne({"_id": doc.phone}, function(err, result) {
                if (err) throw err;
                item.phone = result.phone
            });
			
            resultArray.push(item);
        }, async function() {
            await client.close();
            res.render('index', {items: resultArray});
        });
    });
    res.render('index', {items: resultArray});
});

router.get('/delete',function (req, res, next){
    let select_id = objectId(req.query.id.toString());
    mongo.connect(url, function (err, client) {
        if (err) throw err;
        var db = client.db(db_name);
        db.collection('users').deleteOne({"_id": select_id}, function (err, result) {
            if (err) throw err;
            client.close();
        });
    });
    res.redirect('/index');
});

module.exports = router;
