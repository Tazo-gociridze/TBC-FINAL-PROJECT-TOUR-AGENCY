import { useTranslation } from "react-i18next";
import { IoPeopleSharp } from "react-icons/io5";

const SocialTitle = () => {
  const { t } = useTranslation('footer')
  return (
    <h2 className="mb-6 flex items-center gap-x-3 text-xl text-gray-100 lg:text-2xl">
      <span>{t('social-title')}</span>
      <span>
        <IoPeopleSharp />
      </span>
    </h2>
  );
};

export default SocialTitle;
