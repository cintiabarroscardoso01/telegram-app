import express from "express";

const router = express.Router();

// rota de teste
router.get("/test", (req, res) => {
  res.json({
    status: "ok",
    message: "Rota de autenticação funcionando 🚀"
  });
});

export default router;
