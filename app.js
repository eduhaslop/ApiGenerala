var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/usuarios');
var partidasRouter = require('./routes/partidas');
var mayoresRouter = require('./routes/mayores');
var menoresRouter = require('./routes/menores');
var newPartidaRouter = require('./routes/nuevapartida');
var tiradasRouter = require('./routes/tiradas');
var dadosRouter = require('./routes/dados');

var app = express();

app.set('json spaces', 2);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/usuarios', usersRouter);
app.use('/partidas', partidasRouter);
app.use('/nuevapartida', newPartidaRouter);
app.use('/tiradas', tiradasRouter);
app.use('/mayores', mayoresRouter);
app.use('/menores', menoresRouter);
app.use('/dados', dadosRouter);


module.exports = app;
