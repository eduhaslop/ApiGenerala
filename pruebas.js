let partida = {
  _id: 1,
  usuario : 1,
  nivel : {level: 1,
           tiros: 5,
           meta: 1000},
  tirada : {
      dados: {
          d1 : {valor : null, guardado : false},
          d2 : {valor : null, guardado : false},
          d3 : {valor : null, guardado : false},
          d4 : {valor : null, guardado : false},
          d5 : {valor : null, guardado : false}
        },
        intentos: 5
  },
  juegos : {
      generaladoble : 60,
      generala : 50,
      poker : 45,
      full : 0,
      escalera : 25,
      seis : 24,
      cinco : 20,
      cuatro : 16,
      tres : 3,
      dos : 6,
      uno : 1
  },
  victoria : undefined,
  puntaje : undefined
}

function ordenarValores(partida){
  let dados = partida.tirada.dados;
    let arrayValores = [];
    for (item in dados){
      arrayValores.push(dados[item].valor);
    }
    arrayValores.sort(function(a, b) {
      return a - b;
    });
    return arrayValores;
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
  }
  resultado.victoria = victoria;
  resultado.puntaje = puntaje;
  return resultado;
}

console.log(obtenerResultado(partida));
