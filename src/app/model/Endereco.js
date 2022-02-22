const mongoose = require("mongoose");
const EnderecoSchema = new mongoose.Schema(
    {
        cep: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Endereco", EnderecoSchema);