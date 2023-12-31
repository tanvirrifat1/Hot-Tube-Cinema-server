import express from 'express';
import { cartController } from './Cart.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../enums/user';

const router = express.Router();

router.get('/total', cartController.getAllDataTotal);

router.post('/create-cart', cartController.insertIntoDb);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  cartController.getSingleData,
);
router.delete('/:id', cartController.deleteData);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  cartController.getAllData,
);
router.patch('/:id', cartController.updatedData);

export const CartRoutes = router;
