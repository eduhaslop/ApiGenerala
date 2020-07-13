const express = require('express');
const dataUsuarios = require('../data/usuario');
const router = express.Router();

router.get('/', async (req, res)=>{
    let usuario = await dataUsuarios.getUsuarioWithMail(req.body.mail);

    if (!!usuario && usuario.pass === req.body.pass) {
        res.send(usuario);
    } else {
        req.status(401).send('email o contrasenia incorrectos');
    }
});

module.exports = router;

