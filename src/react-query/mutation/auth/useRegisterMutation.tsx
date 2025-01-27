import { RegistrationForm } from '@/api/auth/auth.types';
import { register } from '@/api/auth/register';
import {
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query';
import { AUTH_MUTATION_KEY } from './enum';
import { RegisterErrorResponse, RegisterResult, RegisterSuccessResponse, UseRegisterMutationArgs } from './types';


const useRegisterMutation = ({
  mutationOptions = {},
}: UseRegisterMutationArgs): UseMutationResult<
  RegisterSuccessResponse,
  RegisterErrorResponse,
  RegistrationForm
> => {
  const mutationFn = async (
    registrationValues: RegistrationForm
  ): Promise<RegisterSuccessResponse> => {
    const result: RegisterResult = await register(registrationValues);


    if (!result.user) {
      throw new Error("User not created");
    }

    return {
      message: 'User registered successfully',
      id: result.user.id,
    };
  };
  return useMutation<RegisterSuccessResponse, RegisterErrorResponse, RegistrationForm>({
    mutationKey: [AUTH_MUTATION_KEY.REGISTER],
    mutationFn: mutationFn,
    ...mutationOptions,
  });
};

export default useRegisterMutation;