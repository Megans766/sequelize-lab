const router = require('express').Router()
const authorsCtrl = require('../controllers/authors.js')

//routes
router.post('/', authorsCtrl.create)

module.exports = router