import ServiceAtendimentos from '../service/atendimentos.js'

class ControllerAtendimentos {

    async Buscar(_, res) {
        try {
            const atendimentos = await ServiceAtendimentos.Buscar()
            res.send({ message: atendimentos })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Detalhe(req, res) {
        try {
            const id = req.params.id

            const atendimento = await ServiceAtendimentos.Detalhe(id)

            res.send({ message: atendimento })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Criar(req, res) {
        try {
            const { dia, hora, valor, concluido } = req.body

            await ServiceAtendimentos.Criar(dia, hora, valor, concluido)

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
            const { dia, hora, valor, concluido } = req.query

            await ServiceAtendimentos.Alterar(id, dia, hora, valor, concluido)

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

            await ServiceAtendimentos.Deletar(id)

            res.send({ message: "Deletado!" })
        } catch (error) {
            res.status(500).send({
                message: error.message
            })
        }
    }

    async Login(req, res) {
        try {
            const { hora, valor, concluido } = req.body

            const token = await ServiceAtendimentos.Login(hora, valor, concluido)

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
export default new ControllerAtendimentos()