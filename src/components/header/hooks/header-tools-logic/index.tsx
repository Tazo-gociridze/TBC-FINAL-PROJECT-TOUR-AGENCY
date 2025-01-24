import { useTranslation } from 'react-i18next';
import { useAuth } from '@/store/auth';
import { logout } from '@/api/auth/logout';
import { useMutation } from '@tanstack/react-query';
import useHeaderLogic from '../../hooks/useHeaderLogic';
import { useNavigate } from 'react-router-dom';

const useHeaderToolsLogic = () => {
  const [user, setUser] = useAuth();
  const { themeIcon, changeTheme } = useHeaderLogic();
  const navigate = useNavigate();
  const { t } = useTranslation('header');
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
    onSuccess: () => {
      setUser(null);
      navigate('/login');
    },
  });

  const handleLogout = async () => {
    await mutate();
  };

  return {
    user,
    themeIcon,
    changeTheme,
    t,
    handleLogout,
  };
};

export default useHeaderToolsLogic;
