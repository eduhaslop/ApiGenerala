let partida = {
  _id: 2,
  usuario: 1,
  nivel: {
    level: 1,
    tiros: 5,
    meta: 100
  },
  tirada: {
    dados: {
      d1: {
        valor: 5,
        guardado: false
      },
      d2: {
        valor: 5,
        guardado: true
      },
      d3: {
        valor: 5,
        guardado: true
      },
      d4: {
        valor: 1,
        guardado: true
      },
      d5: {
        valor: 5,
        guardado: false
      }
    },
    intentos: 5
  },
  generaladoble: 0,
  generala: 50,
  poker: null,
  full: null,
  escalera: null,
  seis: null,
  cinco: null,
  cuatro: null,
  tres: null,
  dos: null,
  uno: null
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



console.log(ordenarValores(partida));
console.log(calcularPoker(partida));






