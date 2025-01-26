import { useTranslation } from 'react-i18next';
import { GrContact } from 'react-icons/gr';

const ContactTitle = () => {
  const { t } = useTranslation('footer')
  return (
    <h2 className="mb-6 flex items-center gap-x-3 text-xl text-gray-100 lg:text-2xl">
      <span>{t("contact-title")}</span>
      <span>
        <GrContact />
      </span>
    </h2>
  );
};

export default ContactTitle;
