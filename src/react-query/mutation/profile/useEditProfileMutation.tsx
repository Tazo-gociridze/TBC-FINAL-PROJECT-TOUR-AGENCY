import { fetchUpdateProfile } from '@/api/profile/edit';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { PROFILE_MUTATION_KEY } from './enum';
import {
  UpdateProfileData,
  UpdateProfileErrorResponse,
  UpdateProfileSuccessResponse,
  UseEditProfileMutationArgs,
} from './types';

const useEditProfileMutation = ({
  mutationOptions = {},
}: UseEditProfileMutationArgs): UseMutationResult<
  UpdateProfileSuccessResponse,
  UpdateProfileErrorResponse,
  UpdateProfileData
> => {
  const mutationFn = async (updateProfileData: UpdateProfileData) => {
    console.log(updateProfileData);

    await fetchUpdateProfile(updateProfileData);
    return {
      message: 'Profile updated successfully',
      updatedAt: new Date().toISOString(),
    };
  };
  return useMutation<UpdateProfileSuccessResponse, UpdateProfileErrorResponse, UpdateProfileData>({
    mutationKey: [PROFILE_MUTATION_KEY.EDIT_PROFILE],
    mutationFn: mutationFn,
    ...mutationOptions,
  });
};

export default useEditProfileMutation;
