import { logout } from '@/api/auth/logout';
import { useMutation } from '@tanstack/react-query';
import { AUTH_MUTATION_KEY } from './enum';

const useLogoutMutation = ({ mutationOption = {} }) => {
  return useMutation({
    mutationKey: [AUTH_MUTATION_KEY.LOGOUT],
    mutationFn: logout,
    ...mutationOption,
  });
};

export default useLogoutMutation;
