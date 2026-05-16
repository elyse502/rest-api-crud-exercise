import { Schema, model, Document } from "mongoose";
import { Item } from "../types/item.types";

export interface ItemDocument extends Item, Document {}

const itemSchema = new Schema<ItemDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ItemModel = model<ItemDocument>("Item", itemSchema);
