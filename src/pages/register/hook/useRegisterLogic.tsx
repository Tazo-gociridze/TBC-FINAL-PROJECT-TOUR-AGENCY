import { RegistrationForm } from '@/api/auth/auth.types';
import { useRegister } from '@/api/auth/register';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

const useRegisterLogic = () => {
  const { t } = useTranslation('zodRegistration');

  const registerSchema = useMemo(() => {
    return z
      .object({
        username: z
          .string()
          .min(3, { message: t('Username must be at least 3 characters') })
          .max(20, { message: t('Username must be at most 20 characters') }),
        email: z.string().email({ message: t('Invalid email address') }),
        phone: z
          .string()
          .regex(/^\+?\d{10,15}$/, { message: t('Invalid phone number') })
          .min(10, { message: t('Phone number must be at least 10 characters') }),
        password: z.string().min(6, { message: t('Password must be at least 6 characters') }),
        repeatPassword: z.string(),
      })
      .refine((data) => data.password === data.repeatPassword, {
        message: t('Passwords do not match'),
        path: ['repeatPassword'],
      });
  }, [t]);

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
    errors,
  };
};

export default useRegisterLogic;
