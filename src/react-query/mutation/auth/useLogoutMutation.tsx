import { logout } from '@/api/auth/logout';
import {
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';
import { AUTH_MUTATION_KEY } from './enum';
import { LogoutArguments, LogoutErrorResponse, LogoutSuccessResponse, UseLogoutMutationArgs } from './types';


const useLogoutMutation = ({
  mutationOptions = {},
}: UseLogoutMutationArgs): UseMutationResult<
  LogoutSuccessResponse,
  LogoutErrorResponse,
  LogoutArguments
> => {
  const mutationFn = async (): Promise<LogoutSuccessResponse> => {
    await logout();
    return { message: 'Logged out successfully' };
  };
  return useMutation<LogoutSuccessResponse, LogoutErrorResponse, LogoutArguments>({
    mutationKey: [AUTH_MUTATION_KEY.LOGOUT],
    mutationFn: mutationFn,
    ...mutationOptions,
  });
};

export default useLogoutMutation;