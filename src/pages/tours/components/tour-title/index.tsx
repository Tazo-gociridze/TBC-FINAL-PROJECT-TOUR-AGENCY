import { useTranslation } from 'react-i18next';

const ToursTitle = () => {
  const { t } = useTranslation('tours');

  return (
    <h1 className="mb-8 text-lg font-semibold text-gray-800 sm:text-3xl dark:text-white">
      {t('tours-title')}
    </h1>
  );
};

export default ToursTitle;
