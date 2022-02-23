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
        },
        round: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Round"
            }
        ]

    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Partida", PartidaSchema);