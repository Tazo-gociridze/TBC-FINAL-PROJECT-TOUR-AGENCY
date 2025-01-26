import { Button, Form, Input, Space } from 'antd';
import { FC } from 'react';
import { Control, Controller, UseFormHandleSubmit } from 'react-hook-form';
import { ProfileFormValues } from '../..';
import { useTranslation } from 'react-i18next';

export interface ProfileFormProps {
  handleSubmit: UseFormHandleSubmit<ProfileFormValues>;
  onFinish: (values: ProfileFormValues) => Promise<void>;
  handleCancelEdit: () => void;
  control: Control<ProfileFormValues>;
}

const ProfileForm: FC<ProfileFormProps> = ({
  handleSubmit,
  control,
  onFinish,
  handleCancelEdit,
}) => {
  const { t } = useTranslation('profile');
  return (
    <Form layout="vertical" onFinish={handleSubmit(onFinish)}>
      <Form.Item label={t('username')}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => <Input placeholder={t('Enter-your-name')} {...field} />}
        />
      </Form.Item>
      <Form.Item label={t('number')}>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <Input placeholder={t('Enter-your-phone-number')} {...field} />}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            {t('save')}
          </Button>
          <Button type="default" onClick={handleCancelEdit}>
            {t('cancel')}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
