// Server 2

var http = require('http');

http.createServer(function(req, res){
    res.write('<h1>Welcome to My Personal Blog</h1>' + '<p>Stay tuned! Contents are coming soon.</p>');
    res.write(req.url);
    res.end();   
}).listen(3000); 