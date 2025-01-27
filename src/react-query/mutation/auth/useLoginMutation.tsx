import { login } from '@/api/auth/login';
import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query';
import { AUTH_MUTATION_KEY } from './enum';
import { LoginCredentials, LoginErrorResponse, LoginSuccessResponse } from './types';

interface UseLoginMutationArgs {
  mutationOptions?: Omit<
    UseMutationOptions<LoginSuccessResponse, LoginErrorResponse, LoginCredentials>,
    'mutationKey'
  >;
}
const useLoginMutation = ({
  mutationOptions = {},
}: UseLoginMutationArgs): UseMutationResult<
  LoginSuccessResponse,
  LoginErrorResponse,
  LoginCredentials
> => {
  const loginFn = async (loginValues: LoginCredentials): Promise<LoginSuccessResponse> => {
    const userProfile = await login(loginValues);

    return {
      id: userProfile?.id,
      userId: userProfile?.user_id,
      username: userProfile?.username,
      email: userProfile?.email,
      phone: userProfile?.phone,
    };
  };
  return useMutation<LoginSuccessResponse, LoginErrorResponse, LoginCredentials>({
    mutationKey: [AUTH_MUTATION_KEY.LOGIN],
    mutationFn: loginFn,
    ...mutationOptions,
  });
};

export default useLoginMutation;