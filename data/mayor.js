const dataPartida = require('./partida');
const funciones = require('../functions/f_mayores');

async function updatePuntosEscalera(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularEscalera(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.escalera = puntos;
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

async function updatePuntosFull(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularFull(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.full = puntos;
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

async function updatePuntosPoker(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularPoker(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.poker = puntos;
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

async function updatePuntosGenerala(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularGenerala(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.generala = puntos;
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

async function updatePuntosGdoble(id){
    const partida = await dataPartida.getPartida(id);
    let puntos = await funciones.calcularGdoble(partida);
    let tirosPartida = partida.nivel.tiros;
    partida.generaladoble = puntos;
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

module.exports = {updatePuntosEscalera, updatePuntosFull, updatePuntosPoker, updatePuntosGenerala, updatePuntosGdoble}