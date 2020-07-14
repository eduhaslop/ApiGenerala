const express = require('express');
const dataUsuarios = require('../data/usuario');
const router = express.Router();

router.get('/', async (req, res)=>{
    let usuario = await dataUsuarios.getUsuarioWithMail(req.body.mail);

    if (!!usuario && usuario.pass === req.body.pass) {
        const user_id = usuario.id;
        res.send(user_id);
    } else {
        req.status(401).send('email o contrasenia incorrectos');
    }
});

module.exports = router;

