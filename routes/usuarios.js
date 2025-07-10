import express from 'express'
import usuarioController from '../controllers/usuarios.js'

const router = express.Router()

router.post('/register', usuarioController.register)
router.post('/login', usuarioController.login)
router.get('/users', usuarioController.getAll)

export default router