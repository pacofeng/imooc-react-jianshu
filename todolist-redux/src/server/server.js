const http = require('http')
const fs = require('fs');

http.createServer(function (request, response) {
    const json = fs.readFileSync('todolist.json');
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    response.end(json);
    
}).listen(8888)

console.log('server listening on 8888')