import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ArrowBack from '../../public/images/ArrowBack.svg';
import settingIcon from '../../public/images/settingIcon.svg';
import { colors } from '../../styles/colors';

interface ProfileImgProps {
  profileImgSrc?: string;
}

export default function ProfileImg({ profileImgSrc }: ProfileImgProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoSetting = () => {
    router.push('/donor-setting');
  };

  return (
    <Thumbnail>
      <ThumbnailList>
        <ImageWrapper onClick={handleGoBack}>
          <Image src={ArrowBack} width={18} height={20} alt="previous" />
        </ImageWrapper>
        <ImageWrapper onClick={handleGoSetting}>
          <Image src={settingIcon} width={18} height={18} alt="settings" />
        </ImageWrapper>
      </ThumbnailList>
      {profileImgSrc && <Image src={profileImgSrc} width={65} height={65} alt="donor_profile" />}
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
