import { RegistrationForm } from '@/api/auth/auth.types';
import { FC } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input } from 'antd';

interface RegisterInputsProps {
  control: Control<RegistrationForm>;
  errors: FieldErrors<RegistrationForm>;
}

const RegisterInputs: FC<RegisterInputsProps> = ({ control, errors }) => {
  const { t } = useTranslation('zodRegistration');

  return (
    <div className="flex flex-col *:rounded-md *:px-3 *:py-3">
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <>
            <Input className="mt-5" {...field} placeholder={t('usernamePlaceholder')} />
            {errors.username?.message && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(errors.username.message)}</p>
            )}
          </>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <Input className="mt-5" {...field} placeholder={t('emailPlaceholder')} />
            {errors.email?.message && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(errors.email.message)}</p>
            )}
          </>
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <>
            <Input className="mt-5" type="tel" {...field} placeholder={t('phone-number')} />
            {errors.phone?.message && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(errors.phone.message)}</p>
            )}
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <Input.Password className="mt-5" {...field} placeholder={t('passwordPlaceholder')} />
            {errors.password?.message && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(errors.password.message)}</p>
            )}
          </>
        )}
      />
      <Controller
        name="repeatPassword"
        control={control}
        render={({ field }) => (
          <>
            <Input.Password
              className="mt-5"
              {...field}
              placeholder={t('repeatPasswordPlaceholder')}
            />
            {errors.repeatPassword?.message && (
              <p style={{ color: 'red', fontSize: '12px' }}>{t(errors.repeatPassword.message)}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default RegisterInputs;
