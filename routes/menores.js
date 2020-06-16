const express = require('express');
const dataMenores = require('../data/menor');
const router = express.Router();

router.get('/uno/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosUno(req.params.id);
    res.send(puntos);
});

router.get('/dos/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosDos(req.params.id);
    res.send(puntos);
});

router.get('/tres/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosTres(req.params.id);
    res.send(puntos);
});

router.get('/cuatro/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosCuatro(req.params.id);
    res.send(puntos);
});

router.get('/cinco/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosCinco(req.params.id);
    res.send(puntos);
});

router.get('/seis/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosSeis(req.params.id);
    res.send(puntos);
});



module.exports = router;