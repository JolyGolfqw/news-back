const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')
const authMiddleware = require('../models/middlewares/auth.middleware')

const router = Router()

router.post('/comments',authMiddleware, commentsController.addCommentToNews)
router.get('/comments', commentsController.getCommentaries)
module.exports = router