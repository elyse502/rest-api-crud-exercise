import { Request, Response, NextFunction } from "express";
import * as itemService from "../services/item.service";

export const getItems = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    next(error);
  }
};

export const getItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const item = await itemService.getItemById(req.params.id as string);

    if (!item) {
      res.status(404).json({ message: "Item not found" });
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

export const createItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const item = await itemService.createItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const item = await itemService.updateItem(
      req.params.id as string,
      req.body,
    );

    if (!item) {
      res.status(404).json({ message: "Item not found" });
      return;
    }

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const item = await itemService.deleteItem(req.params.id as string);

    if (!item) {
      res.status(404).json({ message: "Item not found" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
