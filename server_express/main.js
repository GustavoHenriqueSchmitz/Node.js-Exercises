import express from 'express'

// Server configuration
const server = {
    app: express(),
    port: 8080
}

const userPermission = 'user'

server.app.use('/restrict', (req, res, next)=>{
    if (userPermission != 'admin') {
        res.statusCode = 403
        res.send('<h1>Invalid Permission</h1>')
    }
    next()
})

// Server routes
server.app.get('/', (req, res)=>{
    res.send('<h1>Hello, World!</h1>')
})

server.app.get('/about', (req, res)=>{
    res.send('<h1>About Page</h1>')
})

server.app.get('/restrict', (req, res)=>{
    res.sendFile('/home/redy/Documentos/GitHub-Local-Rep/nodejs-program-exercices/server_express/main.html')
})

server.app.get('/restrict/test', (req, res)=>{
    res.send('This a restrict page')
})

// Initing server
server.app.listen(8080, ()=>{
    console.log(`Servidor rodando em localhost:${server.port}...`)
})
