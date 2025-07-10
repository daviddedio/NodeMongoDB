import express from 'express'
import 'dotenv/config'
import routeMascotas from './routes/mascotas.js'
import routeUsuarios from './routes/usuarios.js'
import bodyParser from 'body-parser'
import dbClient from './config/dbClient.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/pets',routeMascotas)
app.use('/users', routeUsuarios)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=>{
        console.log(`Escuchando por el puerto ${PORT}`)
    })
    
} catch (error) {
    console.log(error.message)
}

process.on('SIGINT', async()=>{
    dbClient.cerrarConexion();
    process.exit(0)
})