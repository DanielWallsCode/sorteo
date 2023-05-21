import { Router } from "express";
import { obtenerUsuarios,obtenerUsuario,crearUsuario } from "../controllers/usuario.controllers.js";

const router = Router();

router.get('/',obtenerUsuarios);

router.get('/:id',obtenerUsuario);

router.post('/crear',crearUsuario);

export default router;