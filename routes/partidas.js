const express = require('express');
const dataPartidas = require('../data/partida');
const router = express.Router();

router.get('/', async (req, res)=>{
    let partidas = await dataPartidas.getPartidas();
    res.send(partidas);
  });
  
router.get('/:id', async (req, res)=>{
    let partida = await dataPartidas.getPartida(req.params.id);
    res.send(partida);
});

router.post('/', async (req, res)=>{
    let result = await dataPartidas.pushPartida(
        {
            _id: req.body._id,
            usuario : req.body.usuario,
            nivel : req.body.nivel,
            tirada : req.body.tirada,
            juegos : req.body.juegos,
            victoria : req.body.victoria,
            puntaje : req.body.puntaje
        }
    );

    res.send(result)
});

router.put('/:id', async (req, res)=>{
    let result = await dataPartidas.updatePartida(
        {
            _id: req.params.id,
            usuario : req.body.usuario,
            nivel : req.body.nivel,
            tirada : req.body.tirada,
            juegos : req.body.juegos,
            victoria : req.body.victoria,
            puntaje : req.body.puntaje
        }
    );

    res.send(result)
});

router.delete('/:id', async (req, res)=>{
    let result = await dataPartidas.deletePartida(req.params.id);
    res.send(result);
});

module.exports = router;

