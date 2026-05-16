import { Router } from "express";
import * as itemController from "../controllers/item.controller";
import { validateItem } from "../middleware/validate-item.middleware";

const router = Router();

// Health check endpoint
router.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "🍽️ Welcome to the Item Management REST API 🚀",
  });
});

// Item routes
router.get("/items", itemController.getItems);
router.get("/items/:id", itemController.getItem);
router.post("/items", validateItem, itemController.createItem);
router.put("/items/:id", validateItem, itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

export default router;
