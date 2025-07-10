import 'dotenv/config'
import jsonwebtoken from 'jsonwebtoken';

export function generarToken(email) {
    return jsonwebtoken.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

export function verificarToken(req, res, next) {
    try {
        const token = req.header('Authorization')?.replace('Bearer ','');
        if (!token) {return res.status(401).json({ msg: "token no valido" })}
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        res.status(500).json(error)
    }
}
