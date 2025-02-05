import { RegistrationForm } from '@/api/auth/auth.types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useRegisterMutation from '@/react-query/mutation/auth/useRegisterMutation';
import { AuthData } from '@/utils/userType';
import { useRegisterSchema } from './register.schema';
import { message } from 'antd';

const useRegisterLogic = () => {

  const { registerSchema } = useRegisterSchema()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending, error } = useRegisterMutation({
    mutationOptions: {
      onSuccess: (data: AuthData) => {
        setEmail(data.user?.email || null);
      },
      onError: () => {
        message.error('Something went wrong')
      }
    },
  });

  const [email, setEmail] = useState<string | null>(null);

  const onSubmit = async (registrationValues: RegistrationForm) => {
    try {
      await mutate(registrationValues);
    } catch (e) {
      console.error('Error on register', e);
    }
  };

  const getEmailServiceLink = (email: string | null) => {
    if (!email) {
      return null;
    }
    const domain = email.split('@')[1];
    if (domain === 'gmail.com') {
      return 'https://mail.google.com/';
    } else if (domain === 'outlook.com' || domain === 'hotmail.com') {
      return 'https://outlook.live.com/';
    } else if (domain === 'mail.ru') {
      return 'https://mail.ru/';
    } else if (domain === 'yandex.ru' || domain === 'yandex.com') {
      return 'https://mail.yandex.com/';
    }
    return `https://www.${domain}`;
  };

  return {
    control,
    handleSubmit,
    isPending,
    error,
    email,
    onSubmit,
    getEmailServiceLink,
    errors,
  };
};

export default useRegisterLogic;
