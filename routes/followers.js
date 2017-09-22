var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://f1webdev:f10000@ds139844.mlab.com:39844/f1react';

function a (vari)
{
    MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected succesfully to server");
            var fan = db.collection("p1web");
        var obj = {nombre : vari}

        fan.insertOne(obj);

        }

    )
}
/* GET home page. */
router.get('/:username', function(req, res) {


    var github = new GitHubApi({});


    github.users.getFollowingForUser({
        username: req.params.username

    }, function(err, data) {
        a(req.params.username);
        res.json(data);
    });


});

module.exports = router;