const express = require('express');
const dataUsuarios = require('../data/usuario');
const router = express.Router();


router.post('/', async (req, res)=>{
    let previousUser = await dataUsuarios.getUsuarioWithMail(req.body.mail);
   
    if (!!previousUser) {
        res.statusCode = 409;
        res.send('El usuario ya esta registrado');
    } else if (!!req.body.pass && !!req.body.mail && !!req.body.nombre){
        let result = await dataUsuarios.pushUsuario(
            {
                nombre: req.body.nombre,
                mail: req.body.mail,
                pass: req.body.pass,
                victorias: 0,
                derrotas: 0,
                score: 0,
                record: 0,
                promedio: 0
            }
        );

        if(!!result){
            let usuario = await dataUsuarios.getUsuarioWithMail(req.body.mail);
            const user = {"nombre": usuario.nombre, "id": usuario._id}
            res.send({"usuario": user});

        } else {
            res.statusCode = 504;
            res.send("Hubo un error inesperado al registrar");
        }
    } else {
        res.statusCode = 504;
            res.send("Hubo un error inesperado al registrar");
    }
});

module.exports = router;