import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RepositoryClientes from '../repository/clientes.js'

const segredo = 'S3gred0'

class ServiceClientes {

    async Buscar() {
        return RepositoryClientes.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favpr informar o ID!")
        }

        const cliente = await RepositoryClientes.FindById(id)

        if (!cliente) {
            throw new Error(`ID ${id} do usuário não encontrado!`)
        }

        return cliente
    }

    async Criar(nome, email, senha) {
        if (!nome || !email || !senha) {
            throw new Error("Favor informar todos os dados!")
        }

        const senhaCrypto = await bcrypt.hash(senha, 12)

        const cliente = await RepositoryClientes.Create(nome, email, senhaCrypto)

        return cliente
    }

    async Alterar(id, nome, email, senha) {
        if (!id || !nome || !email || !senha) {
            throw new Error("Favor informar o ID!")
        }

        const senhaCrypto = !senha ? undefined : await bcrypt.hash(senha, 12)

        const clienteAlterar = await RepositoryClientes.Update(id, nome, email, senhaCrypto)

        return clienteAlterar
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID!")
        }

        const cliente = await RepositoryClientes.Delete(id)

        return cliente
    }

    async Login(email, senha) {
        if (!email || !senha) {
            throw new Error("Email ou senha inválido!")
        }

        const cliente = await RepositoryClientes.FindByEmail(email)

        if (!cliente) {
            throw new Error("Email ou senha inválido!")
        }

        if (
            !(await bcrypt.compare(String(senha), cliente.senha))
        ) {
            throw new Error("Email ou senha inválido!")
        }

        return jwt.sign(
            { id: cliente.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }

}
export default new ServiceClientes()