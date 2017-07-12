// Add all node modules here..
const async       = require('async');
const express     = require('express');
const bodyParser  = require('body-parser');

//TODO : Increasing number of constants, we will list in this file
//const C = require(__dirname + "/constants.js")

// One for serving static files and the other for serving apis.
const app = express();
// Exclusively for api mounting
const api = express();

// Load all nodejs middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
	extended: true
}));

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/../public/'));

app.listen(3010);
console.log("App server running on port 3010"); 

/** Page-not-found middleware. */
function handle404(req, res, next) {
	res.status(404).end('not found');
}

app.use('/api/', api);
