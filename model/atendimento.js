import database from "../config/database.js"

class Atendimentos {
    constructor() {
        this.model = database.db.define("atendimentos", {
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
                type: database.db.Sequelize.STRING,
            },
            // idCliente: {
            //     type: database.db.Sequelize.INTEGER,
            //     references: {
            //         model: "clientes",
            //         key: "id"
            //     }
            // }
        })

    // this.model.belongsTo(Cliente, )

    }
}
export default new Atendimentos().model