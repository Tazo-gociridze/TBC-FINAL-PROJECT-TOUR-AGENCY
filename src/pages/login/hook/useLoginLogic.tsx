import { LoginForm, UserProfile } from '@/api/auth/auth.types';

import useLoginMutation from '@/react-query/mutation/auth/useLoginMutation';
import { useAuth } from '@/store/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const useLoginLogic = () => {
  const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  });

  const navigate = useNavigate();
  const [, setUser] = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate } = useLoginMutation({
    mutationOptions: {
      onSuccess: (user: UserProfile) => {
        navigate(`/`);
        setUser(user);
      },
    },
  });

  const onSubmit = (loginValues: LoginForm) => {
    mutate(loginValues);
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useLoginLogic;
