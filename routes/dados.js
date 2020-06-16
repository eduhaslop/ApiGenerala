
const express = require('express');
const dataDados = require('../data/dado');
const router = express.Router();

router.put('/d1/:id', async (req, res) => {
    let result = await dataDados.updateDadoUno(req.params.id);
    res.send(result);
});

router.put('/d2/:id', async (req, res) => {
    let result = await dataDados.updateDadoDos(req.params.id);
    res.send(result);
});

router.put('/d3/:id', async (req, res) => {
    let result = await dataDados.updateDadoTres(req.params.id);
    res.send(result);
});

router.put('/d4/:id', async (req, res) => {
    let result = await dataDados.updateDadoCuatro(req.params.id);
    res.send(result);
});

router.put('/d5/:id', async (req, res) => {
    let result = await dataDados.updateDadoCinco(req.params.id);
    res.send(result);
});

module.exports = router;