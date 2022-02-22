const Endereco = require("../model/Endereco");
class EnderecoController {
    async store(req, res) {
        const data = await Endereco.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Endereco.find({});
        return res.json(data);
    }
}
module.exports = new EnderecoController();