import Button from '@/utils/Button/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const LoginFooter = () => {
  const { t } = useTranslation('login');
  const { t: headerTr } = useTranslation('header');
  return (
    <>
      <Button style={{ padding: '12px 0' }}>{headerTr('headerLogin')}</Button>
      <div className="flex items-center justify-between">
        <span className="font-medium text-[#424242]">{t('doYouHaveAccount')}</span>
        <Link to={`/register`}>
          <span className="text-[var(--main-color)] hover:underline">{t('register')}</span>
        </Link>
      </div>
    </>
  );
};

export default LoginFooter;
