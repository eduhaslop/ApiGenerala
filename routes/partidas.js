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
            generaladoble : req.body.generaladoble,
            generala : req.body.generala,
            poker : req.body.poker,
            full : req.body.full,
            escalera : req.body.escalera,
            seis : req.body.seis,
            cinco : req.body.cinco,
            cuatro : req.body.cuatro,
            tres : req.body.tres,
            dos : req.body.dos,
            uno : req.body.uno
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
            generaladoble : req.body.generaladoble,
            generala : req.body.generala,
            poker : req.body.poker,
            full : req.body.full,
            escalera : req.body.escalera,
            seis : req.body.seis,
            cinco : req.body.cinco,
            cuatro : req.body.cuatro,
            tres : req.body.tres,
            dos : req.body.dos,
            uno : req.body.uno
        }
    );

    res.send(result)
});

router.delete('/:id', async (req, res)=>{
    let result = await dataPartidas.deletePartida(req.params.id);
    res.send(result);
});

module.exports = router;

