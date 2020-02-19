const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('Received ' + req.method + ' request for: ' + req.url);

    res.writeHead(200, { 'Content-Type' : 'text/plain' });

    res.end('Hello World');
});

const PORT = process.env.PORT || 8080

server.listen(PORT, 'localhost', null, function() {
    console.log(`Server is listening on localhost:${PORT}`);
})
