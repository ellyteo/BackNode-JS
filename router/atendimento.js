import express from 'express'
import ControllerAtendimentos from '../controller/atendimento.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.post("/login", ControllerAtendimentos.Login)
router.get("/listar",  authMiddleware, ControllerAtendimentos.Buscar)
router.get("/detalhe/:id", ControllerAtendimentos.Detalhe)
router.post("/criar", ControllerAtendimentos.Criar)
router.put("/alterar/:id", ControllerAtendimentos.Alterar)
router.delete("/deletar/:id", ControllerAtendimentos.Deletar)

export default router