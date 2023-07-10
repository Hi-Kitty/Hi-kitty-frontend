import styled from '@emotion/styled';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import Image from 'next/image';
import { colors } from '../../../styles/colors';
import { useGetByEmail } from '../../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import { useGetBoards } from '../../../api/모금자용-권한용-api/모금자용-권한용-api';
import { GetBoardsParams } from '../../../orval/model';
import PostCard from '../../../components/PostCard/PostCard';
import { AllPostResponse } from '../../../types/post';
import { useRouter } from 'next/router';

const PAGE_PARAM = {
  page: 0,
  size: 100000,
} as unknown as GetBoardsParams;

export default function FundraiserListNone() {
  const router = useRouter();
  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;

  const getUserBoardStatus = useGetBoards(PAGE_PARAM);
  const userBoard = getUserBoardStatus.data?.response?.content;

  const handleGoBack = () => {
    router.back();
  };

  const handleGoSetting = () => {
    router.push('/mypage/setting');
  };

  return (
    <Container>
      <Header />
      <Thumbnail>
        <ThumbnailList>
          <Image src="/images/ArrowBack.svg" width={18} height={20} alt="previous" onClick={handleGoBack} />
          <Image src="/images/settingIcon.svg" width={18} height={18} alt="settings" onClick={handleGoSetting} />
        </ThumbnailList>
        <Image src={String(userInfo?.url ?? '')} width={65} height={65} alt="donor_profile" />
      </Thumbnail>

      <ProfileInfo>
        <Profile>프로필</Profile>
        <InformationBoxWrapper>
          <InfoBox>
            <InfoName>로그인</InfoName>
            <InfoValue>{userInfo?.email}</InfoValue>
            <Line />
          </InfoBox>
          <InfoBox>
            <InfoName>프로젝트팀</InfoName>
            <InfoValue>{userInfo?.name}</InfoValue>
            <Line />
          </InfoBox>
        </InformationBoxWrapper>

        {/* <Profile>연동계좌</Profile>
        <InformationBoxWrapper>
          <InfoBox>
            <InfoName>계좌</InfoName>
            <InfoValue>{userInfo.}</InfoValue>
            <Line />
          </InfoBox>
        </InformationBoxWrapper> */}
      </ProfileInfo>

      <DonationListTitle>모금함</DonationListTitle>
      {/* {userInfo?.?.length === 0 ? (
       <CatFeed>
       <Image src="../images/CatFeed.svg" width={218} height={142} alt="후원내역이 없어요" />
     </CatFeed>
     <DonationMsg>키치한 프로젝트를{'\n'}시작해 보세요</DonationMsg>
        }) : (
            <DonorList donorlist={donorList} />
            )}
        {/* <DonorListNone /> */}
      {userBoard?.length === 0 ? (
        <>
          <CatFeed>
            <Image src="../images/Cat-hungry.svg" width={218} height={142} alt="후원내역이 없어요" />
          </CatFeed>
          <DonationMsg>키치한 프로젝트를{'\n'}시작해 보세요</DonationMsg>
        </>
      ) : (
        <>
          {userBoard?.map(board => (
            <PostCard list={board as unknown as AllPostResponse} key={board.id} />
          ))}
        </>
        // <PostCard post={userBoard} />
      )}

      <Footer />
    </Container>
  );
}

const Container = styled.div``;

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
  position: relative;
  padding-bottom: 33px;
`;
const InfoName = styled.div`
  position: absolute;
  left: 0;
  display: inline;
  width: 100px;
  font-size: 14px;
  font-weight: 600;
`;

const InfoValue = styled.div`
  position: absolute;
  left: 100px;
  display: inline;
  font-size: 14px;
  font-weight: 600;
`;

const Line = styled.div`
  width: 25rem;
  padding: 28px 0 0 89px;
  margin-left: 100px;
  border-bottom: 1px solid #000;
`;

const DonationListTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.black};
  padding: 21px 0 10px 17px;
`;

const CatFeed = styled.div`
  display: flex;
  justify-content: center;
`;

const DonationMsg = styled.div`
  padding: 13px 0 100px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #29292e;
  white-space: pre-wrap;
  letter-spacing: -0.072px;
`;
