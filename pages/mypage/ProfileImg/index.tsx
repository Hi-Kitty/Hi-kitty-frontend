import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { colors } from '../../../styles/colors';

interface ProfileImgProps {
  profileImgSrc?: string;
}

export default function ProfileImg({ profileImgSrc }: ProfileImgProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoSetting = () => {
    router.push('/mypage/setting');
  };

  return (
    <Thumbnail>
      <ThumbnailList>
        <ImageWrapper onClick={handleGoBack}>
          <Image src="/images/ArrowBack.svg" width={18} height={20} alt="previous" />
        </ImageWrapper>
        <ImageWrapper onClick={handleGoSetting}>
          <Image src="/images/settingIcon.svg" width={18} height={18} alt="settings" />
        </ImageWrapper>
      </ThumbnailList>
      {profileImgSrc && (
        <Image src={profileImgSrc} width={65} height={65} style={{ borderRadius: '100px' }} alt="donor_profile" />
      )}
    </Thumbnail>
  );
}

const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 131px;
  background-color: ${colors.gray300};
`;

const ThumbnailList = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;
