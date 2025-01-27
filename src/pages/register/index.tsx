import EmailConfirmation from '@/components/email-confirmation';
import RegisterHeader from './components/register-header';
import RegisterInputs from './components/register-inputs';
import RegisterFooter from './components/register-footer';
import useRegisterLogic from './hook/useRegisterLogic';

const Register = () => {
  const { control, handleSubmit, isPending, error, email, onSubmit, getEmailServiceLink, errors } =
    useRegisterLogic();

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-y-10">
      {email ? (
        <EmailConfirmation email={email} getEmailServiceLink={getEmailServiceLink} />
      ) : (
        <>
          <RegisterHeader error={error} isPending={isPending} />
          <form
            className="flex w-[310px] flex-col gap-y-5 rounded-lg bg-[#faf7f7] p-8 shadow-sm sm:w-[500px]"
            onSubmit={handleSubmit(onSubmit)}
            action=""
            autoComplete="chrome-off"
          >
            <RegisterInputs control={control} errors={errors}/>
            <RegisterFooter />
          </form>
        </>
      )}
    </section>
  );
};

export default Register;
