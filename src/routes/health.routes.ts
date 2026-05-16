import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "🍽️ Welcome to the Item Management REST API 🚀",
  });
});

export default router;
