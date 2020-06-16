const dataPartida = require('./partida');
const funciones = require('../functions/f_menores');

async function updatePuntosUno(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularUno(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.uno = puntos;
    partida.tirada = {
        dados: {
            d1 : {valor : null, guardado : false},
            d2 : {valor : null, guardado : false},
            d3 : {valor : null, guardado : false},
            d4 : {valor : null, guardado : false},
            d5 : {valor : null, guardado : false}
        },
        intentos : tirosPartida 
    }
    dataPartida.updatePartida(partida);
    return {puntaje : puntos};
}

async function updatePuntosDos(id){
    const partida = await dataPartida.getPartida(id); 
    let puntos = await funciones.calcularDos(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.dos = puntos;
    partida.tirada = {
        dados: {
            d1 : {valor : null, guardado : false},
            d2 : {valor : null, guardado : false},
            d3 : {valor : null, guardado : false},
            d4 : {valor : null, guardado : false},
            d5 : {valor : null, guardado : false}
        },
        intentos : tirosPartida 
    }
    dataPartida.updatePartida(partida);
    return {puntaje : puntos};
}

async function updatePuntosTres(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularTres(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.tres = puntos;
    partida.tirada = {
        dados: {
            d1 : {valor : null, guardado : false},
            d2 : {valor : null, guardado : false},
            d3 : {valor : null, guardado : false},
            d4 : {valor : null, guardado : false},
            d5 : {valor : null, guardado : false}
        },
        intentos : tirosPartida 
    }
    dataPartida.updatePartida(partida);
    return {puntaje : puntos};
}

async function updatePuntosCuatro(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularCuatro(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.cuatro = puntos;
    partida.tirada = {
        dados: {
            d1 : {valor : null, guardado : false},
            d2 : {valor : null, guardado : false},
            d3 : {valor : null, guardado : false},
            d4 : {valor : null, guardado : false},
            d5 : {valor : null, guardado : false}
        },
        intentos : tirosPartida 
    }
    dataPartida.updatePartida(partida);
    return {puntaje : puntos};
}

async function updatePuntosCinco(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularCinco(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.cinco = puntos;
    partida.tirada = {
        dados: {
            d1 : {valor : null, guardado : false},
            d2 : {valor : null, guardado : false},
            d3 : {valor : null, guardado : false},
            d4 : {valor : null, guardado : false},
            d5 : {valor : null, guardado : false}
        },
        intentos : tirosPartida 
    }
    dataPartida.updatePartida(partida);
    return {puntaje : puntos};
}

async function updatePuntosSeis(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularSeis(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.seis = puntos;
    partida.tirada = {
        dados: {
            d1 : {valor : null, guardado : false},
            d2 : {valor : null, guardado : false},
            d3 : {valor : null, guardado : false},
            d4 : {valor : null, guardado : false},
            d5 : {valor : null, guardado : false}
        },
        intentos : tirosPartida 
    }
    dataPartida.updatePartida(partida);
    return {puntaje : puntos};
}

module.exports = {updatePuntosUno, updatePuntosDos, updatePuntosTres, updatePuntosCuatro, updatePuntosCinco, updatePuntosSeis}