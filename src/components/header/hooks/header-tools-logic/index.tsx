import { useTranslation } from 'react-i18next';
import { useAuth } from '@/store/auth';
import useHeaderLogic from '../../hooks/useHeaderLogic';
import { useNavigate } from 'react-router-dom';
import useLogoutMutation from '@/react-query/mutation/auth/useLogoutMutation';

const useHeaderToolsLogic = () => {
  const [user, setUser] = useAuth();
  const { themeIcon, changeTheme } = useHeaderLogic();
  const navigate = useNavigate();
  const { t } = useTranslation('header');

  const { mutate } = useLogoutMutation({mutationOption: {
    onSuccess: () => {
      setUser(null);
      navigate('/login');
    },
  }})


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
