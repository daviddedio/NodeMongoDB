import mascotasModel from '../models/mascotas.js'

class mascotasController {
    constructor() { }

    async create(req, res) {
        try {
            const data = await mascotasModel.create(req.body)
            res.status(200).json(data)
        }
        catch (error) { res.status(500).json(error) }
    }

    async createMany(req, res) {
        try {
            const data = await mascotasModel.createMany(req.body)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params
            const data = await mascotasModel.update(id, req.body)
            res.status(200).json(data)
        }
        catch (error) { res.status(500).json(error) }
    }

    async adopt(req, res){
        try{
            const {id} = req.params
            console.log(id)  
            const data = await mascotasModel.adopt(id, req.body.responsable)
            res.status(200).json(data)
        }catch(error){
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const data = await mascotasModel.delete(id)
            res.status(200).json(data)
        }
        catch (error) { res.status(500).json(error) }
    }

    async deleteAll(req, res) {
        try {
            const data = await mascotasModel.deleteAll()
            res.status(200).json(data)
        }
        catch (error) { res.status(500).json(error) }
    }

    async findAll(req, res) {
        try {
            const data = await mascotasModel.getAll()
            res.status(200).json(data)
        }
        catch (error) { res.status(500).json(error) }
    }

    async findOne(req, res) {
        try {
            const { id } = req.params
            const data = await mascotasModel.getOne(id)
            res.status(200).json(data)
        }
        catch (error) { res.status(500).json(error) }
    }
}

export default new mascotasController;