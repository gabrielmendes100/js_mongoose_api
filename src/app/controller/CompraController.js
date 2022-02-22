const Compra = require("../model/Compra");
class CompraController {
    async store(req, res) {
        const data = await Compra.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Compra.find({});
        return res.json(data);
    }
}
module.exports = new CompraController();