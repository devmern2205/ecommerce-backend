const express = require('express');
const dbConnection = require('./config/dbConnection');
const app = express();
app.use(express.json());
require('dotenv').config();
const  route  = require('./route');

dbConnection();

app.use(route);
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(3000)