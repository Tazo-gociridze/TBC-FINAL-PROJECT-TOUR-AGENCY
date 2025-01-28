import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfileButtonsProps {
  handleLogoutProfile: () => void;
  isEditing: boolean;
  handleEditClick: () => void;
}

const ProfileButtons: FC<ProfileButtonsProps> = ({
  handleLogoutProfile,
  isEditing,
  handleEditClick,
}) => {
  const { t } = useTranslation('profile');
  return (
    <div className="mt-6 *:text-[11px]">
      <Button type="primary" className="mr-5" danger onClick={handleLogoutProfile}>
        {t('logout')}
      </Button>
      {!isEditing && (
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={handleEditClick}
          className="mt-4 md:mt-0"
        >
          {t('edit')}
        </Button>
      )}
    </div>
  );
};

export default ProfileButtons;
