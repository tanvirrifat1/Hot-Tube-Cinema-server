import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import { ISignInData } from './auth.interface';
import { UserITem } from '../UserItems/user.model';
import ApiError from '../../errors/AppError';
import { jwtHelpers } from '../../utils/jwtHelpers';
import config from '../../config';

const signInUser = async (payload: ISignInData) => {
  const { email } = payload;

  // Find the user by email
  const user = await UserITem.findOne({ email });
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User not found');
  }

  const accessToken = jwtHelpers.createToken(
    { userEmail: user.email, role: user.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );
  return { accessToken };
};

export const AuthService = {
  signInUser,
};
