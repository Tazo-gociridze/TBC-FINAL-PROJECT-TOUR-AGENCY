import { LoginForm } from '@/api/auth/auth.types';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input } from 'antd';

interface LoginInputsProps {
  control: Control<LoginForm>;
}

const LoginInputs: FC<LoginInputsProps> = ({ control }) => {
  const { t } = useTranslation('login');
  return (
    <div className="flex flex-col gap-y-5 *:rounded-md *:px-3 *:py-3">
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input {...field} placeholder={t('emailPlaceholder')} />}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input.Password {...field} placeholder={t('passwordPlaceholder')} />}
      />
    </div>
  );
};

export default LoginInputs;
