import { Schema, model } from 'mongoose';
import { ICart } from './Cart.interface';

const cartItem = new Schema<ICart>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    overview: {
      type: String,
    },
    title: {
      type: String,
    },
    url: {
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
