const request = require('request');
const cheerio = require('cheerio'); 

// demo of company email
var email = 'test@canddi.com';
var domain = email.replace(/.*@/, "");
console.log(domain);

// search the domain on google and find first webpage displayed
request(('https://www.google.com/search?q=' + domain), (error, response, html) => {
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);   // html of google search result
		const page = $('.r');
		link = page.find('a').attr('href');	
		console.log(link); 
		
		// request the company website and scrape it for information
		request(link, (error1, response1, html1) => {
			if (!error1 && response1.statusCode == 200) {
				console.log(html1);   // html of company page	
			} // if
			else {
				console.log('bad company link');
			} // else
		}); // request
			
	} // if
}); // request