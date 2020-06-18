const dataPartidas = require('./partida');
const dataUsuarios = require('./usuario');

async function terminarPartida(id){
    let partida = await dataPartidas.getPartida(id);
    if(partida.puntaje !== null){
        return {};
    }
    else{
        let resultado = obtenerResultado(partida);
        partida.victoria = resultado.victoria;
        partida.puntaje = resultado.puntaje;
        await dataPartidas.updatePartida(partida);
        let usuario = await dataUsuarios.getUsuario(partida.usuario);
        usuario.score += partida.puntaje;
        if(partida.victoria){
            usuario.victorias ++;
        }
        else{
            usuario.derrotas ++;
        } 
        if(usuario.record == null || usuario.record < partida.puntaje){
            usuario.record = partida.puntaje;
        }  
        usuario.promedio = usuario.score / (usuario.victorias + usuario.derrotas);
        await dataUsuarios.updateUsuario(usuario); 
        return resultado;
    }
    
}

function obtenerResultado(partida){
    let resultado = {};
    let puntaje = 0;
    let victoria = false;
    let juegos = partida.juegos;
    for (item in juegos){
        puntaje += juegos[item];
    }
    if (puntaje >= partida.nivel.meta){
        victoria = true;
        puntaje = puntaje * partida.nivel.level;
    }
    resultado.victoria = victoria;
    resultado.puntaje = puntaje;
    return resultado;
  }



module.exports = {terminarPartida};