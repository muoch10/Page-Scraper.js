function getHtml(url,cb){var request=`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20htmlstring%20where%20url%3D%27${url}%2F%27&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`
fetch(request).then(e=>{e.text().then(responseText=>{cb(JSON.parse(responseText))})})}
