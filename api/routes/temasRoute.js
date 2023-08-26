const { Router } = require('express')
const TemaController = require('../controllers/TemaController')

const router = Router()

router
    .get('/tema', TemaController.getAllTemas)
    .get('/tema/:id_tema', TemaController.getTemaById)
    .get('/tema/like/:nome', TemaController.getTemasByName)

module.exports = router