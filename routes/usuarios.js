const express = require('express');
const dataUsuarios = require('../data/usuario');
const router = express.Router();

// GET lista de usuarios 
router.get('/', async (req, res)=>{
  let usuarios = await dataUsuarios.getUsuarios();

  res.send(usuarios);
});

router.get('/:id', async (req, res)=>{
    let usuario = await dataUsuarios.getUsuario(req.params.id);
    res.send(usuario);
});

router.post('/', async (req, res)=>{
    let result = await dataUsuarios.pushUsuario(
        {
            _id: req.body._id,
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

    res.send(result)
});

router.put('/:id', async (req, res)=>{
    let result = await dataUsuarios.updateUsuario(
        {
            _id: req.params.id,
            nombre: req.body.nombre,
            mail: req.body.mail,
            pass: req.body.pass,
            victorias: req.body.victorias,
            derrotas: req.body.derrotas,
            score: req.body.score,
            record: req.body.record,
            promedio: req.body.promedio
        }
    );

    res.send(result)
});

router.delete('/:id', async (req, res)=>{
    let result = await dataUsuarios.deleteUsuario(req.params.id);
    res.send(result);
});

module.exports = router;