function ordenarValores(partida) {
  let dados = partida.tirada.dados;
  let arrayValores = [];
  for (item in dados) {
    arrayValores.push(dados[item].valor);
  }
  arrayValores.sort(function (a, b) {
    return a - b;
  });
  return arrayValores;
}


async function calcularEscalera(partida) {
  let puntos = 0;
  let servida = 0;
  if (partida.nivel.tiros == partida.tirada.intentos + 1) {
    servida = 5;
  }
  let valores = ordenarValores(partida);
  if (valores[0] + 1 == valores[1] &&
    valores[1] + 1 == valores[2] &&
    valores[2] + 1 == valores[3] &&
    valores[3] + 1 == valores[4]) {
    puntos = 20 + servida;
  }
  return puntos;
}

async function calcularFull(partida) {
  let puntos = 0;
  let servida = 0;
  if (partida.nivel.tiros == partida.tirada.intentos + 1) {
    servida = 5;
  }
  let valores = ordenarValores(partida);

  if (valores[0] !== valores[4] &&
    valores[0] == valores[1] &&
    valores[3] == valores[4] &&
    (valores[2] == valores[3] ||
      valores[2] == valores[1])) {
    puntos = 30 + servida;
  }
  return puntos;
};

async function calcularPoker(partida) {
  let puntos = 0;
  let servida = 0;
  if (partida.nivel.tiros == partida.tirada.intentos + 1) {
    servida = 5;
  }
  let valores = ordenarValores(partida);

  if (valores[0] !== valores[4] &&
    valores[1] == valores[2] &&
    valores[2] == valores[3] &&
    (valores[0] == valores[1] ||
      valores[3] == valores[4])) {
    puntos = 40 + servida;
  }
  return puntos;
};

async function calcularGenerala(partida) {
  let puntos = 0;
  let servida = 0;
  if (partida.nivel.tiros == partida.tirada.intentos + 1) {
    servida = 5;
  }
  let valores = partida.tirada.dados;
  if (valores.d1.valor == valores.d2.valor &&
    valores.d2.valor == valores.d3.valor &&
    valores.d3.valor == valores.d4.valor &&
    valores.d4.valor == valores.d5.valor) {
    return puntos = 50 + servida;
  }
  return puntos;
};

async function calcularGdoble(partida) {
  let puntos = 0;
  let servida = 0;
  if (partida.nivel.tiros == partida.tirada.intentos + 1) {
    servida = 5;
  }
  let valores = partida.tirada.dados;
  if (valores.d1.valor == valores.d2.valor &&
    valores.d2.valor == valores.d3.valor &&
    valores.d3.valor == valores.d4.valor &&
    valores.d4.valor == valores.d5.valor &&
    partida.generala == 50) {
    return puntos = 60 + servida;
  }
  return puntos;
};

module.exports = { calcularEscalera, calcularFull, calcularPoker, calcularGenerala, calcularGdoble }