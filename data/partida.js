const conexion = require("./conexion");

async function getPartidas() {
    const clientmongo = await conexion.getConnection();
    const collection = await clientmongo.db("generala")
        .collection("partidas")
        .find()
        .toArray();
    //await clientmongo.close();
    return collection;
}

async function getPartida(partidaId) {
    const clientmongo = await conexion.getConnection();
    const doc = await clientmongo.db("generala")
        .collection("partidas")
        .findOne({ _id: parseInt(partidaId) });
    //await clientmongo.close();
    return doc;
}

async function pushPartida(partida) {
    const clientmongo = await conexion.getConnection();
    const result = await clientmongo.db("generala")
        .collection("partidas")
        .insertOne(partida);
    //await clientmongo.close();
    return result;
}

async function updatePartida(partida) {
    const clientmongo = await conexion.getConnection();
    const query = { _id: parseInt(partida._id) };
    const newvalues = {
        $set:
        {
            usuario: partida.usuario,
            nivel: partida.nivel,
            tirada: partida.tirada,
            juegos: partida.juegos,
            victoria: partida.victoria,
            puntaje: partida.puntaje
        }
    };

    const result = await clientmongo.db("generala")
        .collection("partidas")
        .updateOne(query, newvalues);
    await clientmongo.close();
    return result;
}

async function deletePartida(partidaId) {
    const clientmongo = await conexion.getConnection();

    const result = await clientmongo.db("generala")
        .collection("partidas")
        .deleteOne({ _id: parseInt(partidaId) });
    //await clientmongo.close();
    return result;
}


module.exports = { getPartidas, getPartida, pushPartida, updatePartida, deletePartida };