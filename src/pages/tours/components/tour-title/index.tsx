import { useTranslation } from 'react-i18next';

const ToursTitle = () => {
  const { t } = useTranslation('tours');

  return (
    <h1 className="mb-8 text-lg sm:text-3xl font-semibold text-gray-800 dark:text-white">
      {t('tours-title')}
    </h1>
  );
};

export default ToursTitle;
