var config = {
	port: 3010,
	defaults:{
		psize: 3000
	}, 
	api:{
		//local api connection
		// key: 'e97d4c21-0e1c-4349-9016-1151d438ff55',
		// url: 'http://localhost:8088'
		
		//key: '6ec1c63b-08a6-444f-ae6e-72a97d47c079',


		key: '86625d18-4060-4747-b448-74cacda950ce',
		url: 'https://api.zinetgo.com'
		//url: 'https://52.66.82.36'
	},
	cdn: {
		//path: 'https://d1fu5dqflqjmhe.cloudfront.net'
		path: '/assets'	
	}
};

module.exports = config;
