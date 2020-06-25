const express = require('express');
const dataPartidas = require('../data/partida');
const router = express.Router();

router.post('/facil', async (req, res)=>{
    let result = await dataPartidas.pushPartida(
        {
            _id: req.body._id,
            usuario : req.body.usuario,
            nivel : {level: 1,
                     tiros: 5,
                     meta: 150},
            tirada : {
                dados: {
                    d1 : {valor : null, guardado : false},
                    d2 : {valor : null, guardado : false},
                    d3 : {valor : null, guardado : false},
                    d4 : {valor : null, guardado : false},
                    d5 : {valor : null, guardado : false}
                  },
                  intentos: 5
            },
            juegos : {
                generaladoble : undefined,
                generala : undefined,
                poker : undefined,
                full : undefined,
                escalera : undefined,
                seis : undefined,
                cinco : undefined,
                cuatro : undefined,
                tres : undefined,
                dos : undefined,
                uno : undefined
            },
            victoria : undefined,
            puntaje : undefined
        }
    );

    res.send(result)
});

router.post('/medio', async (req, res)=>{
    let result = await dataPartidas.pushPartida(
        {
            _id: req.body._id,
            usuario : req.body.usuario,
            nivel : {level: 3,
                     tiros: 3,
                     meta: 150},
            tirada : {
                dados: {
                    d1 : {valor : null, guardado : false},
                    d2 : {valor : null, guardado : false},
                    d3 : {valor : null, guardado : false},
                    d4 : {valor : null, guardado : false},
                    d5 : {valor : null, guardado : false}
                  },
                intentos: 3
            },
            juegos : {
                generaladoble : undefined,
                generala : undefined,
                poker : undefined,
                full : undefined,
                escalera : undefined,
                seis : undefined,
                cinco : undefined,
                cuatro : undefined,
                tres : undefined,
                dos : undefined,
                uno : undefined
            },
            victoria : undefined,
            puntaje : undefined
        }
    );

    res.send(result)
});

router.post('/dificil', async (req, res)=>{
    let result = await dataPartidas.pushPartida(
        {
            _id: req.body._id,
            usuario : req.body.usuario,
            nivel : {level: 9,
                     tiros: 1,
                     meta: 150},
            tirada : {
                dados: {
                    d1 : {valor : null, guardado : false},
                    d2 : {valor : null, guardado : false},
                    d3 : {valor : null, guardado : false},
                    d4 : {valor : null, guardado : false},
                    d5 : {valor : null, guardado : false}
                  },
                intentos: 1
            },
            juegos : {
                generaladoble : undefined,
                generala : undefined,
                poker : undefined,
                full : undefined,
                escalera : undefined,
                seis : undefined,
                cinco : undefined,
                cuatro : undefined,
                tres : undefined,
                dos : undefined,
                uno : undefined
            },
            victoria : undefined,
            puntaje : undefined
        }
    );

    res.send(result)
});

module.exports = router;

