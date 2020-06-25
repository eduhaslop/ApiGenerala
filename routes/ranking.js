const express = require('express');
const dataRanking = require('../data/ranking');
const router = express.Router();

router.get('/', async (req, res) => {
    let ranking = await dataRanking.getRanking();
    res.send(ranking);
});

module.exports = router;