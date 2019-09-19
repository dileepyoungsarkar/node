// Server 3

var http = require('http');

http.createServer(function(req, res){
    res.write('<h1>Welcome to My Personal Blog</h1>' + "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>" + '<button type="button">Click here!</button>');
    res.end();   
}).listen(3000);