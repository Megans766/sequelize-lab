const router = require('express').Router()
const authorsCtrl = require('../controllers/authors.js')

//routes
router.post('/', authorsCtrl.create)
router.get('/', authorsCtrl.index)
router.put('/:id', authorsCtrl.update)

module.exports = router