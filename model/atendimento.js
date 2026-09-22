import database from "../config/clientes.js"

class Clientes {
    constructor() {
        this.model = database.db.define("clientes", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.STRING
            },
            hora: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            valor: {
                type: database.db.Sequelize.STRING,
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN,
            }
        })
    }
}
export default new Clientes().model