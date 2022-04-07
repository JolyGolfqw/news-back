const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')

const router = Router()

router.post('/news/:id/comments', commentsController.addComment)
router.get('/news/:id/comments', commentsController.getNewsComments)