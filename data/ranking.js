const dataUsuarios = require('./usuario');

async function getRanking(){
    let lista = dataUsuarios.getUsuarios();
    
    //let usuario = dataUsuarios.
    
    
    
    let ranking = {};

    return ranking;
}





module.exports = {getRanking};