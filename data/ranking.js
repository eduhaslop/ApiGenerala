const dataUsuarios = require('./usuario');

async function getRanking() {
    let lista = await dataUsuarios.getUsuarios();
    let pos = 1;
    let ranking = lista
        .sort((a, b) => a.score > b.score ? -1 : 1)
        .map(usuario => ({
            usuario: usuario.nombre,
            posicion: pos++,
            score: usuario.score,
            promedio: Math.floor(usuario.promedio)
        }));

    return ranking;
}

module.exports = { getRanking };