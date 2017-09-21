var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

/* GET home page. */
router.get('/getFollowers', function(req, res) {


    var github = new GitHubApi({});


    github.users.getFollowingForUser({
        username: "john-guerra"
    }, function(err, data) {
       res.json(data);
    });
});

module.exports = router;
