let partida = {
  _id: 1,
  usuario : 1,
  nivel : {level: 1,
           tiros: 5,
           meta: 1000},
  tirada : {
      dados: {
          d1 : {valor : 2, guardado : false},
          d2 : {valor : 3, guardado : false},
          d3 : {valor : 4, guardado : false},
          d4 : {valor : 5, guardado : false},
          d5 : {valor : 6, guardado : false}
        },
        intentos: 4
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

function calcularEscalera(partida){
  let puntos = 0;
  let servida = 0;
  if(partida.nivel.tiros == partida.tirada.intentos+1){
    servida = 5;
  }
  let valores = ordenarValores(partida);
  if(valores[0]+1 == valores[1] &&
     valores[1]+1 == valores[2] &&
     valores[2]+1 == valores[3] &&
     valores[3]+1 == valores[4]){
        puntos = 20 + servida; 
        console.log(partida.nivel.tiros);
        console.log(partida.tirada.intentos);
     }
  return puntos;
}


console.log(calcularEscalera(partida));
