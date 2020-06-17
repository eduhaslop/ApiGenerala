let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let usuariosRouter = require('./routes/usuarios');
let partidasRouter = require('./routes/partidas');
let mayoresRouter = require('./routes/mayores');
let menoresRouter = require('./routes/menores');
let nuevaPartidaRouter = require('./routes/nuevapartida');
let tiradasRouter = require('./routes/tiradas');
let dadosRouter = require('./routes/dados');
let terminarPartidaRouter = require('./routes/terminarpartida');
let rankingRouter = require('./routes/ranking');

let app = express();

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


module.exports = app;
