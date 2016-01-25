var express = require('express');
var router = express.Router();
var feed = require('feed-read');


router.get('/', function(req, res) {
    res.json({"message": "it's workingxs"});
});

router.post('/', function(req, res){
    var list = [];
    var id = 0;
    feed(req.body.url, function(err, articles) {
	if (err) throw err;
	for (var i = 0; i < articles.length; i++) {
	    var elem = {
		id: id,
		title: articles[i].title,
		name: articles[i].name,
		content: articles[i].content,
		published: articles[i].published,
		link: articles[i].link
	    }
	    list.push(elem);
	    i++;
	    id++;
	}
	res.json({ lists: list});
    });
});

module.exports = router;
