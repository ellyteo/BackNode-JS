import RepositoryAtendimentos from '../repository/atendimento.js'

const segredo = 'S3gred0'

class ServiceAtendimentos {

    async Buscar() {
        return RepositoryAtendimentos.Find()
    }

    async Detalhe(id) {
        if (!id) {
            throw new Error("Favpr informar o ID!")
        }

        const atendimento = await RepositoryAtendimentos.FindById(id)

        if (!atendimento) {
            throw new Error(`ID ${id} do usuário não encontrado!`)
        }

        return atendimento
    }

    async Criar(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados!")
        }

        const atendimento = await RepositoryAtendimentos.Create(dia, hora, valor, concluido)

        return atendimento
    }

    async Alterar(id, dia, hora, valor, concluido) {
        if (!id || !dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar o ID!")
        }

        const atendimentoAlterar = await RepositoryAtendimentos.Update(id, dia, hora, valor, concluido)

        return atendimentoAlterar
    }

    async Deletar(id) {
        if (!id) {
            throw new Error("Favor informar o ID!")
        }

        const atendimento = await RepositoryAtendimentos.Delete(id)

        return atendimento
    }

}
export default new ServiceAtendimentos()