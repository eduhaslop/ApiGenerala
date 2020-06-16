const dataPartida = require('./partida');

async function updateTirada(id){
    const partida = await dataPartida.getPartida(id);
    let tirada = partida.tirada;
    let nuevatirada = getNumeros(tirada);
    partida.tirada = nuevatirada;
    await dataPartida.updatePartida(partida);
    return partida.tirada;
}

function getNumeros(tirada){

    if (tirada.intentos > 0){
       if(tirada.dados.d1.guardado == false) {tirada.dados.d1.valor = numeroRandom()};
       if(tirada.dados.d2.guardado == false) {tirada.dados.d2.valor = numeroRandom()};
       if(tirada.dados.d3.guardado == false) {tirada.dados.d3.valor = numeroRandom()};
       if(tirada.dados.d4.guardado == false) {tirada.dados.d4.valor = numeroRandom()};
       if(tirada.dados.d5.guardado == false) {tirada.dados.d5.valor = numeroRandom()};
       tirada.intentos --;
    }
    return tirada;
}

function numeroRandom(){ 
    return 1 + Math.floor(6 * Math.random());
}

module.exports = {updateTirada};

