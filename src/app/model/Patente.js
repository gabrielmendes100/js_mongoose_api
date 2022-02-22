const mongoose = require("mongoose");
const PatenteSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        cor: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Patente", PatenteSchema);