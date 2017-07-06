var express = require('express'),
	partials = require('express-partials'),
	app = express(),
	routes = require('./routes');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
app.use(express.static(__dirname + '/static', { maxage: '30d' }));

//routes
app.get('/', routes.index); 

app.get('/booking', routes.booking);
app.get('/register', routes.register);
app.get('/locator', routes.locator);

app.listen(3010);
console.log("App server running on port 3010"); 