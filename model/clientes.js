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
            },
            // idCliente: {
            //     type: database.db.Sequelize.INTEGER,
            //     references: {
            //         model: "clientes",
            //         key: "id"
            //     },
            //     onUpdate: 'CASCATE',
            //     onDelete: 'CASCATE'
            // }
        })
    }
    // static associate(models){
    //     this.model.HasMany(model.Clientes,{foreignKey: 'idCliente', as: 'idDoCliente'})
    // }
}
export default new Clientes().model