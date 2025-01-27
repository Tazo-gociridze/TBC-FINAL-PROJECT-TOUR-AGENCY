import { RegistrationForm } from "@/api/auth/auth.types";
import { register } from "@/api/auth/register";
import { useMutation } from "@tanstack/react-query";


export const useRegisterMutation = ({mutationOptions={}}) => {
    return useMutation({
      mutationKey: ['register'],
      mutationFn: (registrationValues: RegistrationForm) => register(registrationValues),
      ...mutationOptions
    });
};