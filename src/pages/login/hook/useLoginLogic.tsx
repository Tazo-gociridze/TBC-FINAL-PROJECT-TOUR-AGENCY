import { LoginForm, UserProfile } from '@/api/auth/auth.types';
import useLoginMutation from '@/react-query/mutation/auth/useLoginMutation';
import { useAuth } from '@/store/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { message } from 'antd';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../login.schema';

const useLoginLogic = () => {
  const { t } = useTranslation('login')
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
        console.log(user);
        navigate(`/`);
        setUser(user);
      },
      onError: () => {
        message.error(t('invalid email or password'))
      }
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
