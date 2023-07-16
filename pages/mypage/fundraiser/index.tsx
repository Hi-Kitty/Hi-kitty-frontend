import styled from '@emotion/styled';
import Header from '../../../components/Layout/Header';
import Footer from '../../../components/Layout/Footer';
import Image from 'next/image';
import { colors } from '../../../styles/colors';
import { useGetByEmail } from '../../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import { useGetBoards } from '../../../api/모금자용-권한용-api/모금자용-권한용-api';
import { GetBoardsParams, PageImageGet } from '../../../orval/model';
import PostCard from '../../../components/PostCard/PostCard';
import { useRouter } from 'next/router';
import ProfileImg from '../../../components/ProfileImg';
import ProfileInfo from '../../../components/ProfileInfo';

const PAGE_PARAM = {
  page: 0,
  size: 100000,
} as unknown as GetBoardsParams;

export default function FundraiserMainProfile() {
  const router = useRouter();
  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;
  const getUserBoardStatus = useGetBoards(PAGE_PARAM);
  const userBoard = getUserBoardStatus.data?.response?.content;

  const handleLogout = (): void => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <Container>
      <Header />
      <ProfileImg profileImgSrc={userInfo?.url} />
      <ProfileInfo email={userInfo?.email ?? ''} name={userInfo?.name ?? ''} />
      <DonationListTitle>모금함</DonationListTitle>
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
            <PostCard list={board as unknown as PageImageGet} key={board.id} />
          ))}
        </>
      )}
      <Logout>
        <p onClick={handleLogout}>로그아웃</p>
      </Logout>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

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

const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 103px 17px 62px 0;

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${colors.gray800};
    cursor: pointer;

    &:hover {
      color: ${colors.black};
      transition: color 0.1s ease-in-out;
    }
  }
`;
