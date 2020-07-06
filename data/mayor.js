const dataPartida = require('./partida');
const funciones = require('../functions/f_mayores');

const dadosNuevos = {
    d1 : {valor : null, guardado : false},
    d2 : {valor : null, guardado : false},
    d3 : {valor : null, guardado : false},
    d4 : {valor : null, guardado : false},
    d5 : {valor : null, guardado : false}
};

async function updatePuntosEscalera(id){
    const partida = await dataPartida.getPartida(id);
    if (partida.juegos.escalera !== null){
        return {};
    }
    else{
        let puntos = await funciones.calcularEscalera(partida);
        let tirosPartida = partida.nivel.tiros;
        partida.juegos.escalera = puntos;
        partida.tirada = {
            dados: dadosNuevos,
            intentos : tirosPartida 
        }
        dataPartida.updatePartida(partida);
        return {puntaje : puntos};
    }    
}

async function updatePuntosFull(id){
    const partida = await dataPartida.getPartida(id);
    if (partida.juegos.full !== null){
        return {};
    }
    else{
        let puntos = await funciones.calcularFull(partida);
        let tirosPartida = partida.nivel.tiros;
        partida.juegos.full = puntos;
        partida.tirada = {
            dados: dadosNuevos,
            intentos : tirosPartida 
        }
        dataPartida.updatePartida(partida);
        return {puntaje : puntos};
    }    
}

async function updatePuntosPoker(id){
    const partida = await dataPartida.getPartida(id);
    if (partida.juegos.poker !== null){
        return {};
    }
    else{
        let puntos = await funciones.calcularPoker(partida);
        let tirosPartida = partida.nivel.tiros;
        partida.juegos.poker = puntos;
        partida.tirada = {
            dados: dadosNuevos,
            intentos : tirosPartida 
        }
        dataPartida.updatePartida(partida);
        return {puntaje : puntos};
    }    
}

async function updatePuntosGenerala(id){
    const partida = await dataPartida.getPartida(id);
    if (partida.juegos.generala !== null){
        return {};
    }
    else{
        let puntos = await funciones.calcularGenerala(partida);
        let tirosPartida = partida.nivel.tiros;
        partida.juegos.generala = puntos;
        partida.tirada = {
            dados: dadosNuevos,
            intentos : tirosPartida 
        }
        dataPartida.updatePartida(partida);
        return {puntaje : puntos};
    }    
}

async function updatePuntosGdoble(id){
    const partida = await dataPartida.getPartida(id);
    if (partida.juegos.generaladoble !== null){
        return {};
    }
    else{
        let puntos = await funciones.calcularGdoble(partida);
        let tirosPartida = partida.nivel.tiros;
        partida.juegos.generaladoble = puntos;
        partida.tirada = {
            dados: dadosNuevos,
            intentos : tirosPartida 
        }
        dataPartida.updatePartida(partida);
        return {puntaje : puntos};
    }    
}

module.exports = {updatePuntosEscalera, updatePuntosFull, updatePuntosPoker, updatePuntosGenerala, updatePuntosGdoble}