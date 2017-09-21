var express = require('express');
var router = express.Router();
var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://f1webdev:f10000@ds139844.mlab.com:39844/f1react';

function getDrivers (callback) {

// Connection URL

// Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected succesfully to server");
        var drivers = db.collection("drivers2017");

        drivers.find({}).toArray((err2, drivers)=>{
            if (err2) throw  err2;
            callback(drivers);
        })
    });
}



/* GET users listing. */
router.get('/', function(req, res) {
    getDrivers((drivers)=>{
        res.json(drivers);

    })
});

module.exports = router;
