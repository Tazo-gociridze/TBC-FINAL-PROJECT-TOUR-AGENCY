import LoginTitle from './components/login-title';
import LoginInputs from './components/login-inputs';
import useLoginLogic from './hook/useLoginLogic';
import LoginFooter from './components/login-footer';

const Login = () => {

  const {
    control,
    handleSubmit,
    onSubmit,
  } = useLoginLogic()


  return (
    <section className="w-100 flex h-screen flex-col items-center justify-center gap-y-10">
      <LoginTitle />
      <form
        className="flex w-1/4 flex-col gap-y-5 rounded-lg bg-[#faf7f7] p-8 shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
        action=""
        autoComplete="chrome-off"
      >
        <LoginInputs control={control} />
        <LoginFooter/>
      </form>
    </section>
  );
};

export default Login;
