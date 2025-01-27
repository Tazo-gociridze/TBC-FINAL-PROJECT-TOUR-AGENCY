import { LoginForm } from '@/api/auth/auth.types';
import { login } from '@/api/auth/login';
import { useAuth } from '@/store/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';



const useLoginLogic = () => {
   const {t} = useTranslation('zodLogin')
  const loginSchema = z.object({
    email: z
      .string()
      .email({ message: t('Invalid email address') }),
    password: z
      .string()
      .min(6, { message: t('Password must be at least 6 characters') }),
  });

  const navigate = useNavigate();
  const [, setUser] = useAuth();

  const { control, handleSubmit, formState: {errors} } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema)
  });

  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: (user) => {
      navigate(`/`);
      setUser(user);
    },
  });

  const onSubmit = (loginValues: LoginForm) => {
    mutate(loginValues);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors
  };
};

export default useLoginLogic;
