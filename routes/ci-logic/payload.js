var express = require('express'),
		router = express.Router();

router.post('/', function(req, res, next) {
	var req_body = req.body;
	console.log(req_body);
	res.send('Worked');
});

module.exports = router;
