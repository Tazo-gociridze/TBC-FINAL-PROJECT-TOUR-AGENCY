import { UserProfile } from '@/api/auth/auth.types';
import { Spin, Typography } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
const { Paragraph } = Typography;


  interface ProfileInfoProps {
    data: UserProfile | null | undefined;
  }

  const ProfileInfo: FC<ProfileInfoProps> = ({ data }) => {
    const {t} = useTranslation('profile')
     if (!data) {
        return <Spin size='default'/>;
    }
  return (
    <div>
      <Paragraph>
        <span className="font-bold">{t('username')}</span> {data?.username}
      </Paragraph>
      <Paragraph>
        <span className="font-bold">{t('number')}</span> {data?.phone}
      </Paragraph>
    </div>
  );
};

export default ProfileInfo;
