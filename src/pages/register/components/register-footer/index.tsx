import Button from '@/utils/Button/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const RegisterFooter = () => {
  const { t } = useTranslation('registration');
  return (
    <>
      <Button style={{ padding: '12px 0' }}>{t('createAccount')}</Button>
      <div className="flex items-center justify-between">
        <span className="font-medium text-[#424242]">{t('dontHaveAnAccount')}</span>
        <Link to={`/login`}>
          <span className="text-[var(--main-color)] hover:underline">{t('login')}</span>
        </Link>
      </div>
    </>
  );
};

export default RegisterFooter;
