const conexion = require("./conexion");

async function getPartidas(){
    const clientmongo = await conexion.getConnection();
    const collection = await clientmongo.db("generala")
        .collection("partidas")
        .find()
        .toArray();

    return collection;
}

async function getPartida(partidaId){
    const clientmongo = await conexion.getConnection();
    const doc = await clientmongo.db("generala")
        .collection("partidas")
        .findOne({_id: parseInt(partidaId)});
    
    return doc;
}

async function pushPartida(partida){
    const clientmongo = await conexion.getConnection();
    const result = await clientmongo.db("generala")
        .collection("partidas")
        .insertOne(partida);

    return result;
}

async function updatePartida(partida){
    const clientmongo = await conexion.getConnection();
    const query = {_id: parseInt(partida._id)};
    const newvalues = {$set: 
                            {
                                usuario : partida.usuario,
                                nivel : partida.nivel,
                                tirada : partida.tirada,
                                generaladoble : partida.generaladoble,
                                generala : partida.generala,
                                poker : partida.poker,
                                full : partida.full,
                                escalera : partida.escalera,
                                seis : partida.seis,
                                cinco : partida.cinco,
                                cuatro : partida.cuatro,
                                tres : partida.tres,
                                dos : partida.dos,
                                uno : partida.uno
                            }
    };

    const result = await clientmongo.db("generala")
        .collection("partidas")
        .updateOne(query,newvalues);
    
    return result;
}

async function deletePartida(partidaId){
    const clientmongo = await conexion.getConnection();
    
    const result = await clientmongo.db("generala")
        .collection("partidas")
        .deleteOne({_id: parseInt(partidaId)});
    
    return result;
}


module.exports = {getPartidas, getPartida, pushPartida, updatePartida, deletePartida};
