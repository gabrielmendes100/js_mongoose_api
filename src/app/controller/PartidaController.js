const Partida = require("../model/Partida");
class PartidaControllerr {
    
    async store(req, res) {
        const data = await Partida.create(req.body); //req.body é o que mando pelo insomnia//
        return res.json(data);
    }

    async list(req, res) {
        const data = await Partida.find({});
        return res.json(data);
    }
    
    async delete(req, res){
        const {id} = req.body
        const data = await Partida.findByIdAndRemove(id)
        return res.send("Partida Removida Com Sucesso!");
    }

    async update(req, res){
        const {id} = req.body
        const data = await Partida.findByIdAndUpdate(id, req.body)
        return res.send("Partida Editada Com Sucesso!");
    }
}
module.exports = new PartidaControllerr();