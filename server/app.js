const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);
const http = require('http')


//Mongo DB Connect
mongoose.connect(process.env.MONGO_URI
    , {useNewUrlParser: true, useUnifiedTopology: true});

//Redis cache error logger
redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
  });

//Init express
const app = express()

//Init Redis Middleware
app.use(session(
    {   secret: process.env.SESSION_SECRET,
        name: 'redis',
        store: new redisStore({host: 'localhost', port: process.env.REDIS_PORT, client: redisClient, ttl: 86400}) 
}))

//????
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Set view engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Start express server
let server = http.createServer(app).listen(process.env.PORT)

console.log("Server listening on port: " + server.address().port)

