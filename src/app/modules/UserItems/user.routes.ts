import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', UserController.getAllData);
router.patch('/:id', UserController.updateData);
router.delete('/:id', UserController.deleteData);
router.post('/', UserController.insertIntoDb);

export const UserRouter = router;
