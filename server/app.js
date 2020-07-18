const express = require('express')
const session = require('express-session')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const redis = require('redis');
const redisClient = redis.createClient();
const redisStore = require('connect-redis')(session);

//Mongo DB Connect
mongoose.connect("mongodb+srv://tezt:Windows.2000@cluster0-gpynn.mongodb.net/testdb?retryWrites=true&w=majority"
    , {useNewUrlParser: true, useUnifiedTopology: true});

