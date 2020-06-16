const express = require('express');
const dataMayores = require('../data/mayor');
const router = express.Router();



router.put('/escalera/:id', async (req, res)=>{
    let puntos = await dataMayores.updatePuntosEscalera(req.params.id);
    res.send(puntos);
});

router.put('/full/:id', async (req, res)=> {
    let puntos = await dataMayores.updatePuntosFull(req.params.id);
    res.send(puntos);
});

router.put('/poker/:id', async (req, res)=>{
    let puntos = await dataMayores.updatePuntosPoker(req.params.id);
    res.send(puntos);
});

router.put('/generala/:id', async (req, res)=> {
    let puntos = await dataMayores.updatePuntosGenerala(req.params.id);
    res.send(puntos);
});

router.put('/gdoble/:id', async (req, res)=> {
    let puntos = await dataMayores.updatePuntosGdoble(req.params.id);
    res.send(puntos);
});



module.exports = router;
