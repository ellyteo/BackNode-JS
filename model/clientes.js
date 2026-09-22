import database from '../config/database.js'

class Clientes {
    constructor() {
        this.model = database.db.define("clientes", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}
export default new Clientes().model