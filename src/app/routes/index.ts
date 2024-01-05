import { Router } from 'express';
import { UserRouter } from '../modules/UserItems/user.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CartRoutes } from '../modules/Cart/Cart.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRouter,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/cart',
    route: CartRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
