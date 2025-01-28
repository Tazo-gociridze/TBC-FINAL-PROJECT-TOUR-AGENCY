import { FC } from 'react';
import { Card, Typography } from 'antd';

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

const Profile: FC = () => {
  const {
    isEditing,
    control,
    handleSubmit,
    onFinish,
    handleLogoutProfile,
    handleCancelEdit,
    handleEditClick,
    data,
  } = useProfileLogic();
  const { t } = useTranslation('profile');
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4 duration-300 dark:bg-[#00000000]">
      <Card
        className="!dark:text-white w-full max-w-full md:max-w-xl xl:max-w-2xl rounded-lg bg-white p-6 shadow-md md:p-8 dark:bg-gray-300"
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
          <>{data ? <ProfileInfo data={data} /> : null}</>
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
