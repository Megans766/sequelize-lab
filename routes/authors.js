const router = require('express').Router()
const authorsCtrl = require('../controllers/authors.js')

//routes
router.post('/', authorsCtrl.create)
router.get('/', authorsCtrl.index)
router.put('/:id', authorsCtrl.update)
router.delete('/:id', authorsCtrl.delete)

router.post('/:id/series', authorsCtrl.addSeries)

module.exports = router