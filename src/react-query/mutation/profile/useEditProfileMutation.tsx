import { fetchUpdateProfile } from '@/api/profile/edit';
import { useMutation } from '@tanstack/react-query';
import { PROFILE_MUTATION_KEY } from './enum';

const useEditProfileMutation = ({ mutationOptions = {} }) => {
  return useMutation({
    mutationKey: [PROFILE_MUTATION_KEY.EDIT_PROFILE],
    mutationFn: fetchUpdateProfile,
    ...mutationOptions,
  });
};

export default useEditProfileMutation;
