import express from "express";
import healthRoutes from "./routes/health.routes";
import itemRoutes from "./routes/item.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use("/", healthRoutes);
app.use("/items", itemRoutes);
app.use(errorHandler);

export default app;
