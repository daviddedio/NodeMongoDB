import mongoose from "mongoose";
import Usuarios from '../schemas/usuarios.js'

class usuarioModel{
    async create(usuario){
        return await Usuarios.create(usuario);
    }

    async update(id, usuario){
        return await Usuarios.findByIdAndUpdate({_id:mongoose.Types.ObjectId(id)}, usuario)
    }

    async delete(id){
        return await Usuarios.findOneAndDelete({_id:mongoose.Types.ObjectId(id)})
    }

    async getById(id){
        return await Usuarios.findById({_id:mongoose.Types.ObjectId(id)})
    }

    async getOne(filter){
        return await Usuarios.findOne(filter)
    }

    async getAll(){
        return await Usuarios.find({})
    }
}

export default new usuarioModel()