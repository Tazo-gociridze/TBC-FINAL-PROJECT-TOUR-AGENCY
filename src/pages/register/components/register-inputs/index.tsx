import { RegistrationForm } from "@/api/auth/auth.types";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface RegisterInputsProps {
    control: Control<RegistrationForm>;
  }

const RegisterInputs: FC<RegisterInputsProps> = ({ control }) => {
    const { t } = useTranslation('registration');
    return (
        <div className="flex flex-col gap-y-5 *:rounded-md *:px-3 *:py-3">
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} placeholder={t('usernamePlaceholder')} />}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input {...field} placeholder={t('emailPlaceholder')} />}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input {...field} type="password" placeholder={t('passwordPlaceholder')} />
          )}
        />
        <Controller
          name="repeatPassword"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input {...field} type="password" placeholder={t('repeatPasswordPlaceholder')} />
          )}
        />
      </div>
    )
  };
  
  export default RegisterInputs;