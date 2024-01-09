import { Schema, model } from 'mongoose';
import { ICart } from './Cart.interface';

const cartItem = new Schema<ICart>(
  {
    name: {
      type: String,
    },
    name2: {
      type: String,
    },
    email: {
      type: String,
    },
    overview: {
      type: String,
    },
    video: {
      type: String,
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },

    productId: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Cart = model<ICart>('cart', cartItem);
