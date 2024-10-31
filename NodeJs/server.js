const http = require('http');

const server = http.createServer((req, res) => {
    // request
    console.log(req.url)

    // response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{"name":"farhan"}');
});

const port=3001
server.listen(port, () => {
    console.log('Server running at http://127.0.0.1:3001/');
});
