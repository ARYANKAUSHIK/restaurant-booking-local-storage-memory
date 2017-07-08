var env = require('../env'),
	config = require('../config/' + env.name);
module.exports.index = index;
module.exports.booking = booking;
module.exports.register = register;
module.exports.locator = locator; 
module.exports.message = message;

function index(req,res){

	res.render('index', {
		layout: 'layout',
		title: 'Credit Login / Register Form ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Login / Register Form Responsive Widget,Restauant Login form widgets, Sign up Web forms , Login signup Responsive web form',
		css: [config.cdn.path+"/css/style-index.css"],
		scripts: [config.cdn.path+"/js/jquery-2.1.4.min.js"]
	});
};


function register(req,res){

	res.render('register', {
		layout: 'layout',
		title: 'Restaurant Register ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Booking / Register Form Responsive Widget,Restaurant Booking, Sign up Web forms , Login signup Responsive web form',
		css: [config.cdn.path+"/css/style-index.css"],
		scripts: [config.cdn.path+"/js/jquery-2.1.4.min.js"]
	});
};

function locator(req,res){

	res.render('locator', {
		layout: 'layout',
		title: 'Restaurant Reservation Form ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Booking / Register Form Responsive Widget,Restaurant Booking, Sign up Web forms , Login signup Responsive web form',
		css: [config.cdn.path+"/css/locator.css"],
		scripts: [config.cdn.path+"/js/locator.js"]

	});
};

function booking(req,res){

	res.render('booking', {
		layout: 'layout',
		title: 'Restaurant Reservation Form ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Booking / Register Form Responsive Widget,Restaurant Booking, Sign up Web forms , Login signup Responsive web form',
		css: null,
		scripts: [config.cdn.path+"/js/jquery-2.1.4.min.js"]
	});
};

function message(req, res) {
	res.render('message', {
		title: 'Thanks for Subscribing Us',
		layout: 'layout',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Booking / Register Form Responsive Widget,Restaurant Booking, Sign up Web forms , Login signup Responsive web form',
		css: null,
		scripts: [config.cdn.path+"/js/jquery-2.1.4.min.js"]		
	});
};
