import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
