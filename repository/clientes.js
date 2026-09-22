import cliente from '../model/clientes.js'

class RepositoryClientes {


    async Find() {
        const clientes = await cliente.findAll()

        return clientes
    }

    async FindById(id) {
        const clienteDetalhe = await cliente.findByPk(id)

        return clienteDetalhe
    }

    async Create(nome, email, senha) {
        const clienteCriar = await cliente.create({ nome, email, senha })

        return clienteCriar
    }

    async Update(id, nome, email, senha) {
        const clienteAlterar = await cliente.findByPk(id)

        if (!clienteAlterar) {
            throw new Error("Usuário não encontrado!")
        }

        clienteAlterar.nome = nome
        clienteAlterar.email = email
        clienteAlterar.senha = senha

        await clienteAlterar.save()
    }

    async Delete(id) {
        const clienteDeletar = await cliente.findByPk(id)

        if (!clienteDeletar) {
            throw new Error("Usuário não encontrado!")
        }

        await clienteDeletar.destroy()

        return clienteDeletar
    }

    async FindByEmail(email) {
        return cliente.findOne({ where: { email } })
    }

}
export default new RepositoryClientes()