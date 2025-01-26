import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface RegisterHeaderProps {
  error: unknown;
  isPending: boolean;
}

const RegisterHeader: FC<RegisterHeaderProps> = ({ isPending }) => {
  const { t } = useTranslation('registration');
  return (
    <>
      <h1 className="text-3xl font-bold text-[#443f3f] dark:text-white">{t('registration')}</h1>
      {isPending && <p>Loading...</p>}
    </>
  );
};

export default RegisterHeader;
