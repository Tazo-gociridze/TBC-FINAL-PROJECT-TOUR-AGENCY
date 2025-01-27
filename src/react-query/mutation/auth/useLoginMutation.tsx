import { login } from '@/api/auth/login';
import { useMutation } from '@tanstack/react-query';
import { AUTH_MUTATION_KEY } from './enum';

const useLoginMutation = ({ mutationOptions = {} }) => {
  return useMutation({
    mutationKey: [AUTH_MUTATION_KEY.LOGIN],
    mutationFn: login,
    ...mutationOptions,
  });
};

export default useLoginMutation;
