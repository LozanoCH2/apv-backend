import express from "express";
const router = express.Router();
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  recuperarPassword,
  comprobarToken,
  nuevoPassword,
  actualizarPerfil,
  actualizarPassword,
} from "../controllers/veterinariController.js";

import checkAuth from "../middleware/authMiddleware.js";

router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/recuperar-password", recuperarPassword);
router
  .route("/recuperar-password/:token")
  .get(comprobarToken)
  .post(nuevoPassword);

router.get("/perfil", checkAuth, perfil);
router.put("/perfil/:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);
export default router;
