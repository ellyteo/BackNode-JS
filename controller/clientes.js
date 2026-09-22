import ServiceClientes from '../service/clientes.js'

class ControllerClientes {

    async Buscar(_, res) {
        try {
            const clientes = await ServiceClientes.Buscar()
            res.send({ message: clientes })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const cliente = await ServiceClientes.Detalhe(id)

            res.send({ message: cliente })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, email, senha } = req.body

            await ServiceClientes.Criar(nome, email, senha)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { nome, email, senha } = req.query

            await ServiceClientes.Alterar(id, nome, email, senha)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id

            await ServiceClientes.Deletar(id)

            res.send({ message: "Deletado!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body

            const token = await ServiceClientes.Login(email, senha)

            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

}
export default new ControllerClientes()