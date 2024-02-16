const express = require('express');
const routers =  require('./routes/index')
const morgan = require('morgan')

const server = express()

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(morgan("dev"))
server.use(express.json())

server.use("/rickandmorty", routers)

server.use(function(err, req, res, next) {
   console.error(err.stack);
   res.status(500).json({ error: "Something is wrong!"});
 });

module.exports = server