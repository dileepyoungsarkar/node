// Server 4

var http = require('http');

http.createServer(function(req, res){
    res.write('<h1>Welcome to Page 2</h1>');
    res.write(req.url);
    res.end();   
}).listen(3000);