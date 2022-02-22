const Patente = require("../model/Patente");
class PatenteController {
    async store(req, res) {
        const data = await Patente.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Patente.find({});
        return res.json(data);
    }
}
module.exports = new PatenteController();
