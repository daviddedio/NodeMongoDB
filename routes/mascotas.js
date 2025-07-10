import express from 'express'
import mascotaController from '../controllers/mascotas.js'
import { verificarToken } from '../helpers/autenticacion.js'

const router = express.Router()

router.get('/', mascotaController.findAll)
router.post('/', mascotaController.create)
router.post('/many', mascotaController.createMany)
router.delete('/all',mascotaController.deleteAll)

router.route('/:id')
    .get(mascotaController.findOne)
    .put(verificarToken, mascotaController.update)
    .delete(verificarToken,mascotaController.delete)


export default router


