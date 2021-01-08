const Sequelize = require('sequelize')
const express = require('express')
const trackRouter = express.Router()
const models = require('../models')




trackRouter.post('/add', (req, res) =>
models
.track
.create(req.body)
.then(res.end("Congratiolation, track has been added"))
)


trackRouter.get('/get/:id', (req, res) => {
    models
    .track
    .findAll({
        where: {
          Id: req.params.id
        }
      })
    .then(track => res.json(track))
});

trackRouter.get('/get/', (req, res) => {
    models
    .track
    .findAll()
    .then(track => res.json(track))
})

trackRouter.delete('/delete/:id', (req, res) => {
    models
    .track
    .destroy({
        where : {
            id : req.params.id
        }
    })
    .then(() => res.send('track has been deleted'))
  });

  trackRouter.put('/modify/:id', (req, res) => {
    models
    .track
    .update(req.body, {
        where : {
            id : req.params.id
        }
    })
    .then(res.end("Track has been modified accordingly"))
  })




module.exports = trackRouter