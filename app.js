var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

/**
 * set the view engine to embedded javascript
 * use /public as the static folder
 */
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

//index page
app.get('/', function(req, res) {
	res.render('index')
})

app.listen(port, function() {
 	console.log("Listening on " + port);
})