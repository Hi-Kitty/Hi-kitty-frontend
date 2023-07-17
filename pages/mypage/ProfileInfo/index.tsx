import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import Input from '../../../components/Input';
import { useGetByEmail } from '../../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';

interface UserProfileInfoProps {
  email: string;
  name: string;
}

export default function UserProfileInfo({ email, name }: UserProfileInfoProps) {
  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;

  return (
    <ProfileInfo>
      <Profile>프로필</Profile>
      <InformationBoxWrapper>
        <InfoBox>
          <InfoName>로그인</InfoName>
          <Input type={'email'} width="280px" value={email} readOnly />
        </InfoBox>
        <InfoBox>
          {userInfo?.role === 'ROLE_FUNDRAISER' ? <InfoName>단체명</InfoName> : <InfoName>닉네임</InfoName>}
          <Input type={'name'} width="280px" value={name} readOnly />
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
