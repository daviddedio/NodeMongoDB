import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        tipo: {
            type: String, required: true,
            enum: ['dog', 'cat', 'bird']
        },
        raza: { type: String },
        edad: {
            type: Number,
            min: [0, 'La edad no puede ser negativa'],
            max: [30, 'La edad no parece correcta']
        },
        adoptado: {
            type: Boolean,
            default: false
        },
        descripcion: { type: String },
        responsable: { type: String}
    }, { timestamps: true }
)

export default mongoose.model('mascotas', mascotaSchema)