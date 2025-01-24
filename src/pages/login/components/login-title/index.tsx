import { useTranslation } from 'react-i18next';

const LoginTitle = () => {
  const { t: headerTr } = useTranslation('header');
  return <h1 className="text-3xl font-bold text-[#443f3f]">{headerTr('headerLogin')}</h1>;
};

export default LoginTitle;
