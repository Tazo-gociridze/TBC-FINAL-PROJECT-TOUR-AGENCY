import { fetchUpdateProfile, fetchUserProfile } from '@/api/profile/edit';
import useHeaderToolsLogic from '@/components/header/hooks/header-tools-logic';
import { useAuth } from '@/store/auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ProfileFormValues } from '..';
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';

const useProfileLogic = () => {
  const { handleLogout } = useHeaderToolsLogic();
  const [user] = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const { t } = useTranslation('profile')

  const { data, refetch } = useQuery({
    queryKey: ['userProfile', user?.id],
    queryFn: () => {
      return fetchUserProfile(user?.id as string);
    },
    enabled: !!user?.id,
  });

  const { control, handleSubmit, reset } = useForm<ProfileFormValues>({
    defaultValues: {
      username: data?.username || '',
      phone: data?.phone || '',
    },
  });

  const { mutate } = useMutation({
    mutationKey: ['edit-profile'],
    mutationFn: fetchUpdateProfile,
    onSuccess: () => {
      refetch();
    },
  });

  const onFinish = async (values: ProfileFormValues) => {
    try {
      if (user?.id) {
        await mutate({
          id: user.id,
          username: values.username,
          phone: values.phone,
        });
        message.success(`${t('update-message')}`);
        reset({ username: values.username, phone: values.phone });
      } else {
        message.error('User ID not found');
      }
      setIsEditing(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error updating user profile:', error.message);
        message.error(error.message || 'Failed to update profile.');
      } else {
        console.error('Failed to update profile:', error);
        message.error('Failed to update profile.');
      }
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    reset();
  };

  const handleLogoutProfile = () => {
    handleLogout();
  };

  return {
    isEditing,
    control,
    handleSubmit,
    onFinish,
    handleLogoutProfile,
    handleCancelEdit,
    handleEditClick,
    data
  };
};

export default useProfileLogic;
