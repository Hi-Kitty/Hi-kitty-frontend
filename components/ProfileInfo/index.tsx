import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { colors } from '../../styles/colors';
import Input from '../Input';

interface UserProfileInfoProps {
  email: string;
  name: string;
}

export default function UserProfileInfo({ email, name }: UserProfileInfoProps) {
  const router = useRouter();

  return (
    <ProfileInfo>
      <Profile>프로필</Profile>
      <InformationBoxWrapper>
        <InfoBox>
          <InfoName>로그인</InfoName>
          <Input type={'email'} width="300px" value={email} />
        </InfoBox>
        <InfoBox>
          <InfoName>닉네임</InfoName>
          <Input type={'email'} width="300px" value={name} />
        </InfoBox>
      </InformationBoxWrapper>
    </ProfileInfo>
  );
}

const ProfileInfo = styled.div`
  padding-left: 17px;
`;
const Profile = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.black};
  padding-top: 17px;
`;

const InformationBoxWrapper = styled.div`
  padding-top: 30px;
`;

const InfoBox = styled.div`
  padding-bottom: 33px;
  display: flex;
  align-items: center;
`;
const InfoName = styled.div`
  display: inline;
  font-size: 16px;
  font-weight: 600;
  margin-right: 52px;
`;

const InfoValue = styled.div`
  display: inline;
  font-size: 14px;
  font-weight: 600;
`;

const Line = styled.div`
  width: 25rem;
  margin-left: 89px;
  padding-top: 5px;
  border-bottom: 1px solid #000;
`;
