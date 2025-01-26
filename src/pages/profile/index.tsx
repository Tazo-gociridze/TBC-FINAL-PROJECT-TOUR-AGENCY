import { FC } from 'react';
import { Card, Typography,  } from 'antd';

import ProfileForm from './components/profile-form';
import ProfileInfo from './components/profile-info';
import ProfileButtons from './components/profile-buttons';
import useProfileLogic from './hooks/useProfileLogic';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

export interface ProfileFormValues {
  username: string;
  phone: string;
}

const Profile:FC = () => {
   const {
    isEditing,
    control,
    handleSubmit,
    onFinish,
    handleLogoutProfile,
    handleCancelEdit,
    handleEditClick,
    data
   } = useProfileLogic()
   const {t} = useTranslation('profile')
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-[#00000000] duration-300 p-4">
      <Card
        className="w-full max-w-2xl rounded-lg bg-white dark:bg-gray-300 !dark:text-white p-6 shadow-md md:p-8"
        title={<Title level={3}>{t('profile')}</Title>}
      >
        {isEditing ? (
          <ProfileForm
            handleSubmit={handleSubmit}
            control={control}
            handleCancelEdit={handleCancelEdit}
            onFinish={onFinish}
          />
        ) : (
          <ProfileInfo data={data} />
        )}

        <ProfileButtons
          handleLogoutProfile={handleLogoutProfile}
          isEditing={isEditing}
          handleEditClick={handleEditClick}
        />
      </Card>
    </div>
  );
};

export default Profile;
