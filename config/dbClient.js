import 'dotenv/config';
import { MongoClient } from "mongodb"
import mongoose from "mongoose";

class dbClient{
    constructor(){
        this.conectarBaseDatos()
    }

    async conectarBaseDatos(){
        const queryString =`mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/adopcion?retryWrites=true&w=majority`;
        await mongoose.connect(queryString)
    }

    async cerrarConexion(){
        try {
            await mongoose.disconnect()
            console.log('Conexion cerrada')
        } catch (error) {
            console.error('error al cerrar la conexion: ', error)
        }
    }

    // async conectarBD(){
    //     try {
    //         await this.client.connect();
    //         this.db = this.client.db('adopcion');
    //         console.log('conectado al servidor de base de datos')
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }
}

export default new dbClient();