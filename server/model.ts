import * as mongoose from 'mongoose';

const CrushSchema = new mongoose.Schema({
    nome: {
        type: {String, required: true},
        apelido: {String, required: true, unique: true },
        whatsapp: {String, required: true, unique: true },
        createdAt: {type:Date, default: Date.now}
    
})

export default mongoose.model('Crush', CrushSchema);
