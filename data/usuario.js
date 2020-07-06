const conexion = require("./conexion");

async function getUsuarios() {
    const clientmongo = await conexion.getConnection();
    const collection = await clientmongo.db("generala")
        .collection("usuarios")
        .find()
        .toArray();
    await clientmongo.close();
    return collection;
}

async function getUsuario(usuarioId) {
    const clientmongo = await conexion.getConnection();
    const doc = await clientmongo.db("generala")
        .collection("usuarios")
        .findOne({ _id: parseInt(usuarioId) });
    await clientmongo.close();
    return doc;
}

async function pushUsuario(usuario) {
    let result;
    if(validateUsuario(usuario)){
        clientmongo = await conexion.getConnection();
        result = await clientmongo.db("generala")
            .collection("usuarios")
            .insertOne(usuario);
        await clientmongo.close();
    } else {
        return 'mandatory fields missing'
    }
    
    return result;
}

async function updateUsuario(usuario) {
    const clientmongo = await conexion.getConnection();
    const query = { _id: parseInt(usuario._id) };
    const newvalues = {
        $set:
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
        .updateOne(query, newvalues);
    await clientmongo.close();
    return result;
}

async function deleteUsuario(usuarioId) {
    const clientmongo = await conexion.getConnection();

    const result = await clientmongo.db("generala")
        .collection("usuarios")
        .deleteOne({ _id: parseInt(usuarioId) });
    await clientmongo.close();
    return result;
}

function validateUsuario(usuario){
    usuario.nombre != null && usuario.mail != null && usuario.pass != null
}

module.exports = { getUsuarios, getUsuario, updateUsuario, pushUsuario, deleteUsuario };