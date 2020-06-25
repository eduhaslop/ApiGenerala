const dataPartida = require('./partida');


async function updateDadoUno(id){
    const partida = await dataPartida.getPartida(id);
    let dados = partida.tirada.dados;
    dados.d1.guardado = !dados.d1.guardado;
    let result = await dataPartida.updatePartida(partida);
    return result;
}

async function updateDadoDos(id){
    const partida = await dataPartida.getPartida(id);
    let dados = partida.tirada.dados;
    dados.d2.guardado = !dados.d2.guardado;
    let result = await dataPartida.updatePartida(partida);
    return result;
}

async function updateDadoTres(id){
    const partida = await dataPartida.getPartida(id);
    let dados = partida.tirada.dados;
    dados.d3.guardado = !dados.d3.guardado;
    let result = await dataPartida.updatePartida(partida);
    return result;
}

async function updateDadoCuatro(id){
    const partida = await dataPartida.getPartida(id);
    let dados = partida.tirada.dados;
    dados.d4.guardado = !dados.d4.guardado;
    let result = await dataPartida.updatePartida(partida);
    return result;
}

async function updateDadoCinco(id){
    const partida = await dataPartida.getPartida(id);
    let dados = partida.tirada.dados;
    dados.d5.guardado = !dados.d5.guardado;
    let result = await dataPartida.updatePartida(partida);
    return result;
}

module.exports = {updateDadoUno, updateDadoDos, updateDadoTres, updateDadoCuatro, updateDadoCinco};