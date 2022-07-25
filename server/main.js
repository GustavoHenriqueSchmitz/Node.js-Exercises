import http from 'http'

const serverConfig = {
    Host: 'localhost',
    Port: '8080'
}

const server = http.createServer(
    (req,res)=>{

        let url = req.url

        if (url === '/') {
            res.statusCode = 200
            res.setHeader('content-type','text/html; charset=utf-8');
            res.end('<h1>Hello, World!</h1>');
        }

        else if (url === '/about') {
            res.statusCode = 200
            res.setHeader('content','text/html; charset=utf-8');
            res.end('<h1>About Page</h1>');
        }
    }
)

server.listen(serverConfig.Port, serverConfig.Host, ()=>{
    console.log(`Servidor rodando em ${serverConfig.Host}:${serverConfig.Port}`)
})


