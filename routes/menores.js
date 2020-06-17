const express = require('express');
const dataMenores = require('../data/menor');
const router = express.Router();

router.put('/uno/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosUno(req.params.id);
    res.send(puntos);
});

router.put('/dos/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosDos(req.params.id);
    res.send(puntos);
});

router.put('/tres/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosTres(req.params.id);
    res.send(puntos);
});

router.put('/cuatro/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosCuatro(req.params.id);
    res.send(puntos);
});

router.put('/cinco/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosCinco(req.params.id);
    res.send(puntos);
});

router.put('/seis/:id', async (req, res)=>{
    let puntos = await dataMenores.updatePuntosSeis(req.params.id);
    res.send(puntos);
});



module.exports = router;