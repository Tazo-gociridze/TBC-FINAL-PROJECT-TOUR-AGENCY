import { LoginForm } from '@/api/auth/auth.types';
import { login } from '@/api/auth/login';
import { useAuth } from '@/store/auth';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useLoginLogic = () => {
  const navigate = useNavigate();
  const [, setUser] = useAuth();

  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
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
  };
};

export default useLoginLogic;
