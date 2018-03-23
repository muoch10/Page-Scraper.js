# Page-Scraper.js
A javascript page scraper that uses YQL to work on the frontend.


---------------


# Usage
Add "scraper.js" or "scraper-minified.js" to your javascript script.

getHtml(url,callback)

getHtml(`https://news.ycombinator.com/`,function(e){
    console.log(e.query.results.result)
})

^^This will log to the console the HTML string for the page at news.ycombinator.com^^^
