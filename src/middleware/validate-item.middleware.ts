import { Request, Response, NextFunction } from "express";

export const validateItem = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { name, description, price } = req.body;

  if (!name || !description || price === undefined) {
    res.status(400).json({
      message: "name, description, and price are required",
    });
    return;
  }

  if (typeof price !== "number" || price < 0) {
    res.status(400).json({
      message: "price must be a positive number",
    });
    return;
  }

  next();
};
