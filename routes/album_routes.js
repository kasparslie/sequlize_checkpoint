const Sequelize = require('sequelize')
const express = require('express')
const albumRouter = express.Router()
const models = require('../models')
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}




albumRouter.post('/add', (req, res) =>
models
.album
.create(req.body)
.then(res.end("Congratiolation, album has been added"))
)

albumRouter.get('/get/:id', (req, res) => {
    models
    .album
    .findAll({
        where: {
          Id: req.params.id
        }
      })
    .then(album => res.json(album))
});

albumRouter.get('/get', (req, res) =>
models
.album
.findAll({
  include : [models.track]
})
.then(songs => res.json(songs))
);

albumRouter.delete('/delete/:id', (req, res) => {
    models
    .album
    .destroy({
        where : {
            id : req.params.id
        }
    })
    .then(() => res.send('Album has been deleted'))
  });

  albumRouter.put('/modify/:id', (req, res) => {
    models
    .album
    .update(req.body, {
        where : {
            id : req.params.id
        }
    })
    .then(res.end("Album has been modified accordingly"))
  })

  albumRouter.get('/title/search?', (req, res) =>
  models
  .album
  .findAll({
      where: {
          title: {
              [Op.like]: '%' + req.query.title + '%'
            },
      }
    })
  .then(album => res.json(album))
  );

  albumRouter.get('/genre/search?', (req, res) =>
  models
  .album
  .findAll({
      where: {
        genre: {
              [Op.like]: '%' + req.query.genre + '%'
            },
      }
    })
  .then(album => res.json(album))
  );

  




module.exports = albumRouter