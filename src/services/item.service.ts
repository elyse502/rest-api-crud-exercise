import { Item } from "../types/item.types";
import { ItemModel } from "../models/item.model";

export const getAllItems = async () => ItemModel.find();

export const getItemById = async (id: string) => ItemModel.findById(id);

export const createItem = async (payload: Item) => ItemModel.create(payload);

export const updateItem = async (id: string, payload: Partial<Item>) =>
  ItemModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

export const deleteItem = async (id: string) => ItemModel.findByIdAndDelete(id);
