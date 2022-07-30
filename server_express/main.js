import express from 'express'

// Server configuration
const server = {
    app: express(),
    port: 8080
}

// Server routes
server.app.get('/', (req, res)=>{
    res.send('<h1>Hello, World!</h1>')
})

server.app.get('/about', (req, res)=>{
    res.send('<h1>About Page</h1>')
})

// Initing server
server.app.listen(8080, ()=>{
    console.log(`Servidor rodando em localhost:${server.port}...`)
})
