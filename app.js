var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var usuariosRouter = require('./routes/usuarios');
var partidasRouter = require('./routes/partidas');
var mayoresRouter = require('./routes/mayores');
var menoresRouter = require('./routes/menores');
var nuevaPartidaRouter = require('./routes/nuevapartida');
var tiradasRouter = require('./routes/tiradas');
var dadosRouter = require('./routes/dados');
var terminarPartidaRouter = require('./routes/terminarpartida');
var rankingRouter = require('./routes/ranking');
var loginRouter = require('/routes/login');
var registerRouter = require('/routes/register');


var app = express();
app.use(cors());
app.set('json spaces', 2);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/usuarios', usuariosRouter);
app.use('/partidas', partidasRouter);
app.use('/nuevapartida', nuevaPartidaRouter);
app.use('/tiradas', tiradasRouter);
app.use('/mayores', mayoresRouter);
app.use('/menores', menoresRouter);
app.use('/dados', dadosRouter);
app.use('/terminar', terminarPartidaRouter);
app.use('/ranking', rankingRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);


module.exports = app;
