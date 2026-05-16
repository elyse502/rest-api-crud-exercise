import { Router } from "express";
import * as itemController from "../controllers/item.controller";
import { validateItem } from "../middleware/validate-item.middleware";

const router = Router();

router.get("/", itemController.getItems);
router.get("/:id", itemController.getItem);
router.post("/", validateItem, itemController.createItem);
router.put("/:id", validateItem, itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

export default router;
