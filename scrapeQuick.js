const request = require('request');
const cheerio = require('cheerio');

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

// scrape social media links from the website footer
request('https://www.canddi.com/', (error, response, html) => {
	if (!error && response.statusCode == 200) {
		const $ = cheerio.load(html);

		$('.footer a').each((i, el) => {
			const link = $(el).attr('href');
			
			if (validURL(link)){
				console.log(link);
			} 
		}); 
	}
});