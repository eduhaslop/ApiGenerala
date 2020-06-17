const express = require('express');
const dataTerminar = require('../data/terminar');
const router = express.Router();

router.put('/:id', async (req, res) => {
    let resultado = await dataTerminar.terminarPartida(req.params.id);
    res.send(resultado);
});




module.exports = router;