const express = require('express');
const dataUsuarios = require('../data/usuario');
const router = express.Router();

router.post('/', async (req, res)=>{
    let usuario = await dataUsuarios.getUsuarioWithMail(req.body.mail);

    if (!!usuario && usuario.pass === req.body.pass) {     
        const user = {"nombre": usuario.nombre, "id": usuario._id}
        res.send({"usuario": user});
    } else {
        res.statusCode = 401;
        res.send('email o contrasenia incorrectos');
    }
});

module.exports = router;

