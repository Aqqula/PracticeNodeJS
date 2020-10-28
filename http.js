const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })
        res.end("<h1>Hello</h1>")
    }
    if(req.url == '/users'){
        res.writeHead(200, {
            'Content-type' : 'text/json'
        })

        const users = [
            {name:"Masha", age:19},
            {name:"Andriy", age:20}
        ]                

        res.end(JSON.stringify(users));
    }   
})

server.listen(3000, () => {
    console.log('Server runing...');
})                                                 