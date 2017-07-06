var env = require('../env'),
	config = require('../config/' + env.name);
module.exports.index = index;
module.exports.booking = booking;
module.exports.register = register;
module.exports.locator = locator;

function index(req,res){

	res.render('index', {
		layout: 'layout',
		title: 'Credit Login / Register Form ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Login / Register Form Responsive Widget,Restauant Login form widgets, Sign up Web forms , Login signup Responsive web form',
		css: [config.cdn.path+"/css/style-index.css"],
		scripts: [config.cdn.path+"/js/jquery.magnific-popup.js"]
	});
};


function register(req,res){

	res.render('register', {
		layout: 'layout',
		title: 'Restaurant Register ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Booking / Register Form Responsive Widget,Restaurant Booking, Sign up Web forms , Login signup Responsive web form',
		css: null,
		scripts: null
	});
};

function locator(req,res){

	res.render('locator', {
		layout: 'layout',
		title: 'Restaurant Reservation Form ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Booking / Register Form Responsive Widget,Restaurant Booking, Sign up Web forms , Login signup Responsive web form'
	});
};

function booking(req,res){

	res.render('booking', {
		layout: 'layout',
		title: 'Restaurant Reservation Form ',
		description: 'Restaurant Booking ',
		keywords: 'Restaurant Booking / Register Form Responsive Widget,Restaurant Booking, Sign up Web forms , Login signup Responsive web form'
	});
};