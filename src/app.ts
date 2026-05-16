import express from "express";
import itemRoutes from "./routes/item.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use(itemRoutes);
app.use(errorHandler);

export default app;
