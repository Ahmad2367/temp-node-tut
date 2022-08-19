const http = require('http')

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
        res.end('Hello How are you')
    }
    if (req.url === '/about') {
        res.end('Hello this is another page ')
    }
    res.end(`<h1>Oops!</h1>
    <p>show some content Please!!</p>`)
})

server.listen(5000)