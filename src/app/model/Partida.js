const mongoose = require("mongoose");
const PartidaSchema = new mongoose.Schema(
    {
        jogador:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Jogador', 
            required: true
        },

        inicio: {
            type: Date,
            required: true
        },
        fim: {
            type: Date,
            required: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Partida", PartidaSchema);