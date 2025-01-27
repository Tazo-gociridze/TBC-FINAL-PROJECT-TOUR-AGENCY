import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input } from 'antd';
import { FieldErrors, Control } from 'react-hook-form';
import { LoginForm } from '@/api/auth/auth.types';

interface LoginInputsProps {
  control: Control<LoginForm>;
  errors: FieldErrors<LoginForm>;
}

const LoginInputs: FC<LoginInputsProps> = ({ control, errors }) => {
  const { t } = useTranslation('zodLogin');
  const { t: LoginT } = useTranslation('login');
  return (
    <div className="flex flex-col *:rounded-md *:px-3 *:py-3">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <Input className="mt-5" {...field} placeholder={LoginT('emailPlaceholder')} />
            {errors.email?.message && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(errors.email.message)}</p>
            )}
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <Input.Password
              className="mt-5"
              {...field}
              placeholder={LoginT('passwordPlaceholder')}
            />
            {errors.password?.message && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(errors.password.message)}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default LoginInputs;
