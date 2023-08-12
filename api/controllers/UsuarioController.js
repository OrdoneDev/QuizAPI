const database = require('../models')

class UsuarioController {
    static async getAllUsuarios(_, res) {
        try {
            const usuarios = await database.usuarios.findAll()
            return res.status(200).json(usuarios)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UsuarioController