const express = require('express');
const app = express();
const mysql = require('mysql2');
const Connection = require('express-myconnection');
const morgan = require('morgan');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// DB
app.use(Connection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'CRUD'
}, 'single'));

// view engine
app.set("view engine", "ejs");

// routes
const homeRouter = require('./routers/homeRouter');

// server uses
app.use('/', homeRouter);


// PORT
app.listen(3000, () =>{
    console.log('------ Servidor corriendo en el puerto 3000 ------');
});