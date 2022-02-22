const Jogador = require("../model/Jogador");
class JogadorController {
    async store(req, res) {
        //Em Jogador, com o método "create", passando por dentro dele o body do request//
        const data = await Jogador.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Jogador.find({});
        return res.json(data);
    }
    async delete(req, res){
        const {id} = req.body
        const data = await Jogador.findByIdAndRemove(id)
        return res.send("Jogador Removido Com Sucesso!");
    }

    async update(req, res){
        const {id} = req.body
        const data = await Jogador.findByIdAndUpdate(id, req.body)
        return res.send("Jogador Editado Com Sucesso!");
    }

}
module.exports = new JogadorController();
