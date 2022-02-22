const mongoose = require("mongoose");
const CompraSchema = new mongoose.Schema(
    {
        total: {
            type: Number,
            required: true,
            default: 0
        },
        jogador: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Jogador',
            required: true
        },
        itens: [
            {
                quantidade: {
                    type: Number,
                    required: true,
                    default: 0
                },
                valor: {
                    type: Number,
                    required: true,
                    default: 0
                },
                artefato: {
                    type: mongoose.Schema.Types.ObjectId, ref: 'Artefato',
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Compra", CompraSchema);
