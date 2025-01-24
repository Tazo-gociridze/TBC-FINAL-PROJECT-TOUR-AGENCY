import EmailConfirmation from '@/components/email-confirmation';
import RegisterHeader from './components/register-header';
import RegisterInputs from './components/register-inputs';
import RegisterFooter from './components/register-footer';
import useRegisterLogic from './hook/useRegisterLogic';

const Register = () => {
  const { control, handleSubmit, isPending, error, email, onSubmit, getEmailServiceLink } =
    useRegisterLogic();

  return (
    <section className="w-100 flex h-screen flex-col items-center justify-center gap-y-10">
      {email ? (
        <EmailConfirmation email={email} getEmailServiceLink={getEmailServiceLink} />
      ) : (
        <>
          <RegisterHeader error={error} isPending={isPending} />
          <form
            className="flex w-1/4 flex-col gap-y-5 rounded-lg bg-[#faf7f7] p-8 shadow-sm"
            onSubmit={handleSubmit(onSubmit)}
            action=""
            autoComplete="chrome-off"
          >
            <RegisterInputs control={control} />
            <RegisterFooter />
          </form>
        </>
      )}
    </section>
  );
};

export default Register;
