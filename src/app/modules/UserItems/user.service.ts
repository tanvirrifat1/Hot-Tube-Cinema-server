import { IUser } from './user.interface';

import { UserITem } from './user.model';

const insertIntoDb = async (payload: IUser): Promise<IUser> => {
  // const existingUser = await UserITem.findOne({ email: payload.email });

  // if (existingUser) {
  //   throw new ApiError(httpStatus.BAD_REQUEST, 'user already exist');
  // }

  const result = await UserITem.create(payload);
  return result;
};

const getAllData = async (): Promise<IUser[]> => {
  const result = await UserITem.find();
  return result;
};

const updateData = async (
  id: string,
  payload: Partial<IUser>,
): Promise<IUser | null> => {
  const result = await UserITem.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteData = async (id: string): Promise<IUser | null> => {
  const result = await UserITem.findByIdAndDelete({ _id: id }, { new: true });
  return result;
};

export const UserService = { insertIntoDb, getAllData, updateData, deleteData };
