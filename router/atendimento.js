import express from 'express'
import ControllerAtendimentos from '../controller/atendimento.js'

const router = express.Router()

router.get("/listar", ControllerAtendimentos.Buscar)
router.get("/detalhe/:id", ControllerAtendimentos.Detalhe)
router.post("/criar", ControllerAtendimentos.Criar)
router.put("/alterar/:id", ControllerAtendimentos.Alterar)
router.delete("/deletar/:id", ControllerAtendimentos.Deletar)

export default router