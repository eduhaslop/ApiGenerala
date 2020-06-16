const express = require('express');
const dataTiradas = require('../data/tirada');
const router = express.Router();

router.put('/:id', async (req, res) => {
    let tirada = await dataTiradas.updateTirada(req.params.id);
    res.send(tirada);
});




module.exports = router;
