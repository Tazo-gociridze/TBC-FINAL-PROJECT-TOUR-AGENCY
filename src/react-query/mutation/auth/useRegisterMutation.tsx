import { RegistrationForm } from '@/api/auth/auth.types';
import { register } from '@/api/auth/register';
import { useMutation } from '@tanstack/react-query';
import { AUTH_MUTATION_KEY } from './enum';

export const useRegisterMutation = ({ mutationOptions = {} }) => {
  return useMutation({
    mutationKey: [AUTH_MUTATION_KEY.REGISTER],
    mutationFn: (registrationValues: RegistrationForm) => register(registrationValues),
    ...mutationOptions,
  });
};
