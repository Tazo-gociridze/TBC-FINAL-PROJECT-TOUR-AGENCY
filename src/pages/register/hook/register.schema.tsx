import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const useRegisterSchema = () => {
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

  return {
    registerSchema,
  };
};
