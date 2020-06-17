const conexion = require("./conexion");

async function getUsuarios(){
    const clientmongo = await conexion.getConnection();
    const collection = await clientmongo.db("generala")
        .collection("usuarios")
        .find()
        .toArray();

    return collection;
}

async function getUsuario(usuarioId){
    const clientmongo = await conexion.getConnection();
    const doc = await clientmongo.db("generala")
        .collection("usuarios")
        .findOne({_id: parseInt(usuarioId)});
    
    return doc;
}

async function pushUsuario(usuario){
    const clientmongo = await conexion.getConnection();
    const result = await clientmongo.db("generala")
        .collection("usuarios")
        .insertOne(usuario);

    return result;
}

async function updateUsuario(usuario){
    const clientmongo = await conexion.getConnection();
    const query = {_id: parseInt(usuario._id)};
    const newvalues = {$set: 
        {
            nombre: usuario.nombre,
            mail: usuario.mail,
            pass: usuario.pass,
            victorias: usuario.victorias,
            derrotas: usuario.derrotas,
            score: usuario.score,
            record: usuario.record,
            promedio: usuario.promedio
        }
    };

    const result = await clientmongo.db("generala")
        .collection("usuarios")
        .updateOne(query,newvalues);
    
    return result;
}

async function deleteUsuario(usuarioId){
    const clientmongo = await conexion.getConnection();
    
    const result = await clientmongo.db("generala")
        .collection("usuarios")
        .deleteOne({_id: parseInt(usuarioId)});
    
    return result;
}

module.exports = {getUsuarios, getUsuario, updateUsuario, pushUsuario, deleteUsuario};