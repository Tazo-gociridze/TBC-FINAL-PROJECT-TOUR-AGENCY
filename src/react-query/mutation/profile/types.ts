import { UseMutationOptions } from '@tanstack/react-query';

export interface UpdateProfileData {
  id: string;
  username?: string;
  email?: string;
  phone?: string;
}

export interface UpdateProfileSuccessResponse {
  message: string;
  updatedAt: string;
}

export interface UpdateProfileErrorResponse {
  message: string;
  statusCode: number;
}

export interface UseEditProfileMutationArgs {
  mutationOptions?: Omit<
    UseMutationOptions<UpdateProfileSuccessResponse, UpdateProfileErrorResponse, UpdateProfileData>,
    'mutationKey'
  >;
}
