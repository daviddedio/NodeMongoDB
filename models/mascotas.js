// import { ObjectId } from "mongodb";
// import dbClient from "../config/dbClient.js";

import Mascotas from '../schemas/mascotas.js'
import mongoose from 'mongoose'

class mascotaModel {
    constructor() { }

    async create(mascota) 
    {return await Mascotas.create(mascota)}

    async createMany(mascotas) 
    {return await Mascotas.createMany(mascotas)}

    async getAll() 
    {return await Mascotas.find()}

    async getOne(id) 
    {return await Mascotas.findById(
        {_id: new mongoose.Types.ObjectId(id)}
    )}

    async update(id, mascota) 
    {return await Mascotas.findOneAndUpdate(
        {_id: new mongoose.Types.ObjectId(id)}, mascota, {new:true}
    )}

    async delete(id) 
    {return await Mascotas.findOneAndDelete(
        {_id: new mongoose.Types.ObjectId(id)}
    )}

    async deleteAll() 
    {return await Mascotas.deleteMany()}
}

export default new mascotaModel();