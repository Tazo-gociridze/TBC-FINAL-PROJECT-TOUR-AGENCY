import Button from '@/utils/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { control, handleSubmit } = useForm();
  const {t} = useTranslation("login")
  const {t:headerTr} = useTranslation("header")

  const onSubmit = (loginValues: any) => {
    console.log(loginValues);
  };
  return (
    <section className="w-100 flex flex-col gap-y-10 h-screen items-center justify-center">
      <h1 className='text-3xl font-bold text-[#443f3f]'>Login</h1>
      <form
        className="flex w-1/4 flex-col gap-y-5 rounded-lg bg-[#faf7f7] p-8 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        autoComplete="chrome-off"
      >
        <div className="flex flex-col gap-y-5 *:rounded-md *:px-3 *:py-3">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} placeholder={t("emailPlaceholder")}  />}
          />

          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <input {...field} type='password' placeholder={t("passwordPlaceholder")} />}
          />
        </div>
        <Button style={{padding:"12px 0"}}>{headerTr("headerLogin")}</Button>
      </form>
    </section>
  );
};

export default Login;
