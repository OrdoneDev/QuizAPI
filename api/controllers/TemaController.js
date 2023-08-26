const database = require('../models')

class TemaController {
    static async getAllTemas(_, res) {
        try {
            const temas = await database.temas.findAll()
            return res.status(200).json(temas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async getTemaById(req, res) {
        const { id_tema } = req.params;

        try {
            const tema = await database.temas.findOne({ where: { id_tema: id_tema }})
            return res.status(200).json(tema)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async getTemasByName(_, res) {
        const { nome } = req.body

        try {
            const temas = await database.temas.findAll({
                where: { titulo: { [Op.like]: `%${nome}%` }}
            })
            return res.status(200).json(temas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TemaController