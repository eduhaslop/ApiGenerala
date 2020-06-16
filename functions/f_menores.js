function calcularMenores(dado, partida){
    let puntos = 0;
    let dados = partida.tirada.dados;
    for (item in dados){
        if (dados[item].valor == dado){
            puntos += dado;
        }
    }
    return puntos;
}

async function calcularUno(partida){
    let puntos = 0;
    puntos = calcularMenores(1, partida);
    return puntos;
}; 

async function calcularDos(partida){
    let puntos;
    puntos = calcularMenores(2, partida);
    return puntos;
}; 

async function calcularTres(partida){
    let puntos;
    puntos = calcularMenores(3, partida);
    return puntos;
}; 

async function calcularCuatro(partida){
    let puntos;
    puntos = calcularMenores(4, partida);
    return puntos;
}; 

async function calcularCinco(partida){
    let puntos;
    puntos = calcularMenores(5, partida);
    return puntos;
}; 

async function calcularSeis(partida){
    let puntos;
    puntos = calcularMenores(6, partida);
    return puntos;
}; 

module.exports = {calcularUno, calcularDos, calcularTres, calcularCuatro, calcularCinco, calcularSeis}