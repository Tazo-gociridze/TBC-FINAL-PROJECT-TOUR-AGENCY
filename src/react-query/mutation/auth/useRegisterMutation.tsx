import { RegistrationForm } from '@/api/auth/auth.types';
import { register } from '@/api/auth/register';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { AUTH_MUTATION_KEY } from './enum';
import { RegisterErrorResponse, RegisterResult, UseRegisterMutationArgs } from './types';
import { AuthData } from '@/utils/userType';

const useRegisterMutation = ({
  mutationOptions = {},
}: UseRegisterMutationArgs): UseMutationResult<
  AuthData,
  RegisterErrorResponse,
  RegistrationForm
> => {
  const mutationFn = async (registrationValues: RegistrationForm): Promise<AuthData> => {
    const result: RegisterResult = await register(registrationValues);

    if (!result.user) {
      throw new Error('User not created');
    }

    return {
      user: result.user,
      session: result.session,
    } as AuthData;
  };
  return useMutation<AuthData, RegisterErrorResponse, RegistrationForm>({
    mutationKey: [AUTH_MUTATION_KEY.REGISTER],
    mutationFn: mutationFn,
    ...mutationOptions,
  });
};

export default useRegisterMutation;
