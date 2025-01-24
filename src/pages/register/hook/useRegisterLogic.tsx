import { RegistrationForm } from '@/api/auth/auth.types';
import { useRegister } from '@/api/auth/register';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useRegisterLogic = () => {
  const { control, handleSubmit } = useForm<RegistrationForm>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const { mutate, isPending, error } = useRegister();
  const [email, setEmail] = useState<string | null>(null);

  const onSubmit = async (registrationValues: RegistrationForm) => {
    try {
      await mutate(registrationValues, {
        onSuccess: (data) => {
          setEmail(data.user?.email || null);
        },
      });
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
  };
};

export default useRegisterLogic;
