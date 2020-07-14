const express = require('express');
const dataUsuarios = require('../data/usuario');
const router = express.Router();


router.post('/', async (req, res)=>{
    let previousUser = await dataUsuarios.getUsuarioWithMail(req.body.mail);
   
    if (!!previousUser) {
        res.status(409).send('El usuario ya esta registrado');
    } else {
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

        let usuario = await dataUsuarios.getUsuarioWithMail(req.body.mail);
    
        const user_id = usuario.id;
        res.send(user_id)
    }
});

module.exports = router;