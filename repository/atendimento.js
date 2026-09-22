import atendimento from '../model/atendimentos.js'

class RepositoryAtendimentos {


    async Find() {
        const atendimentos = await atendimento.findAll()

        return atendimentos
    }

    async FindById(id) {
        const atendimentoDetalhe = await atendimento.findByPk(id)

        return atendimentoDetalhe
    }

    async Create(dia, hora, valor, concluido) {
        const atendimentoCriar = await atendimento.create({ dia, hora, valor, concluido })

        return atendimentoCriar
    }

    async Update(id, dia, hora, valor, concluido) {
        const atendimentoAlterar = await atendimento.findByPk(id)

        if (!atendimentoAlterar) {
            throw new Error("Usuário não encontrado!")
        }

        atendimentoAlterar.dia = dia
        atendimentoAlterar.hora = hora
        atendimentoAlterar.valor= valor
        atendimentoAlterar.concluido= concluido

        await atendimentoAlterar.save()
    }

    async Delete(id) {
        const atendimentoDeletar = await atendimento.findByPk(id)

        if (!atendimentoDeletar) {
            throw new Error("Usuário não encontrado!")
        }

        await atendimentoDeletar.destroy()

        return atendimentoDeletar
    }

}
export default new RepositoryAtendimentos()