const mongoose = require("mongoose");
const JogadorSchema = new mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        pontos: {
            type: Number,
            required: true,
            default: 0
        },
        data_ultimo_login: {
            type: Date,
            required: false
        },
        endereco: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Endereco',
            required: true
        },
        patentes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Patente"
            }
        ],
        artefatos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Artefato"
            }
        ],
        compras: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Compra"
            }
        ]
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Jogador",
    JogadorSchema);