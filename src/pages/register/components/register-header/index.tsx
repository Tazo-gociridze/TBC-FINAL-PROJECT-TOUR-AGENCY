import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface RegisterHeaderProps {
  error: unknown;
  isPending: boolean;
}

const RegisterHeader: FC<RegisterHeaderProps> = ({ error, isPending }) => {
  const { t } = useTranslation('registration');
  return (
    <>
      <h1 className="text-3xl font-bold text-[#443f3f]">{t('registration')}</h1>
      {error && (
        <div className="text-red-500">
          {typeof error === 'object' && error !== null && 'message' in error
            ? (error as Error).message
            : JSON.stringify(error)}
        </div>
      )}
      {isPending && <p>Loading...</p>}
    </>
  );
};

export default RegisterHeader;
