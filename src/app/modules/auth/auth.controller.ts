import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

const SignInUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signInUser(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user Login successfully',
    data: result.accessToken,
  });
});

export const AuthController = { SignInUser };
