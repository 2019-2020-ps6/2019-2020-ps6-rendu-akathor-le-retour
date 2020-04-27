const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const UsersRouter = require('./users')
const ThemeRouter = require('./themes')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/users', UsersRouter)
router.use('/theme', ThemeRouter)

module.exports = router
