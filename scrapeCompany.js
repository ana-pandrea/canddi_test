const request = require('request');
const cheerio = require('cheerio');

var Knwl = require("./knwl.js");
var knwlInstance = new Knwl('english');
knwlInstance.register('phones', require('./default_plugins/phones'));
// *** add times, dates, links, emails, places ***  

// find relevant information on the company website
request('https://www.canddi.com/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);   // html of company
		
		const footer = $('.footer');
		
		knwlInstance.init(string);    // string from html of company page
		var phones = knwlInstance.get('phones'); 
		console.log(phones); 
		
	} // if
}); // request