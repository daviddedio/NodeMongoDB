import usuarioModel from '../models/usuarios.js'
import bcrypt from 'bcrypt'
import { generarToken } from '../helpers/autenticacion.js'

class usuarioController {
    constructor() { }

    async register(req, res) {
        try {
            const { email, nombre, telefono, clave } = req.body
            const usuarioExiste = await usuarioModel.getOne({ email })
            if (usuarioExiste) {
                return res.status(400).json({ msg: "Usuarios existente" });
            }
            const claveEncriptada = await bcrypt.hash(clave, 10)
            const data = await usuarioModel.create({
                email, nombre, telefono, clave: claveEncriptada
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }

    async login(req, res) {
        const { email, clave } = req.body
        const usuarioExiste = await usuarioModel.getOne({ email })
        if (!usuarioExiste) {
            return res.status(400).json({ msg: "Usuario inexistente" });
        }
        const claveValida = await bcrypt.compare(clave, usuarioExiste.clave)
        if (!claveValida) {
            return res.status(400).json({ msg: "Clave invalida" })
        }

        const token = generarToken(email);

        return res.status(200).json({ msg: "usuario validado", token })
    }

    async getAll(req, res) {
        try {
            const usuariosTotal = await usuarioModel.getAll()
            res.status(200).json(usuariosTotal)
        } catch (error) {
            res.status(500).json({ msg: error.message })
        }
    }
}

export default new usuarioController();