import Button from '@/utils/Button/Button';
import TypingText from '@/utils/TypingText/TypingText';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomeMainSectionText = () => {
  const { t } = useTranslation('home');
  return (
    <div className="pl-32">
      <h1 className="mb-10 text-3xl font-medium text-white">
        <TypingText
          strings={[t('home-typing-text-1'), t('home-typing-text-2'), t('home-typing-text-3')]}
        />
      </h1>
      <p className="mb-10 text-lg text-[white]">
        {t('home-introduction-text')}
      </p>
      <Link to={'tours'}>
        <Button>{t("view-other-tours-btn")}</Button>
      </Link>
    </div>
  );
};

export default HomeMainSectionText;
