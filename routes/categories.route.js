const { Router } = require('express')
const { categoriesController } = require('../controllers/categories.controller')

const router = Router()

router.post('/categories', categoriesController.addCategory)
router.get('/categories', categoriesController.getCategories)
// router.get('/category/:id', categoriesController.getNewsByCategory)

module.exports = router