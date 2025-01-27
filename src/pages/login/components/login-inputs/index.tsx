import { LoginForm } from '@/api/auth/auth.types';
import { FC } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input } from 'antd';

interface LoginInputsProps {
  control: Control<LoginForm>;
  errors: FieldErrors<LoginForm>;
}

const LoginInputs: FC<LoginInputsProps> = ({ control, errors }) => {
  const {t} = useTranslation('zodLogin')
  return (
    <div className="flex flex-col *:rounded-md *:px-3 *:py-3">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <Input className='mt-5' {...field} placeholder={t('emailPlaceholder')} />
            {errors.email && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(`${errors.email.message}`)}</p>
            )}
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <Input.Password className='mt-5' {...field} placeholder={t('passwordPlaceholder')} />
            {errors.password && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(`${errors.password.message}`)}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default LoginInputs;
