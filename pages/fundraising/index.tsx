import styled from '@emotion/styled';
import Loading from '../../components/Loading';
import PostCard from '../../components/PostCard/PostCard';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useGetByEmail } from '../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import { colors } from '../../styles/colors';
import { useGetBoards1 } from '../../orval/api/게시판-조회-api/게시판-조회-api';
import { GetBoards1Params, PageImageGet } from '../../orval/model';

const PAGE_PARAM = {
  page: 0,
  size: 100000,
} as unknown as GetBoards1Params;

export default function Fundraising() {
  const router = useRouter();
  const getForumAll = useGetBoards1(PAGE_PARAM);
  const { data, isLoading } = getForumAll;

  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;

  if (isLoading) {
    return <Loading />;
  }

  const handleMoveLogin = () => {
    router.push('/login');
  };

  const handleMoveWrite = () => {
    router.push('/write');
  };

  const handleMoveMypage = () => {
    if (userInfo?.role === 'ROLE_FUNDRAISER') {
      router.push('/mypage/fundraiser');
    } else {
      router.push('/mypage/donor');
    }
  };

  return (
    <Container>
      <TopContainer>
        <Image
          src="/images/ArrowBack.svg"
          width={30}
          height={24}
          alt="log"
          style={{ paddingTop: 5, cursor: 'pointer' }}
          onClick={() => router.back()}
        />
        <h1>모금중</h1>
        {userInfo?.id ? (
          <Image
            src={userInfo?.url ?? '/images/People.svg'}
            alt="profileImg"
            width={34}
            height={26}
            style={{ borderRadius: '100px', cursor: 'pointer' }}
            onClick={handleMoveMypage}
          />
        ) : (
          <h3 onClick={handleMoveLogin}>로그인</h3>
        )}
      </TopContainer>
      <ContentWrapper>
        <ContentBox>
          {!!data ? (
            data.response?.content?.map((list: PageImageGet) => {
              if (list.id !== null) {
                return <PostCard list={list} key={list.id} />;
              }
            })
          ) : (
            <Loading />
          )}
        </ContentBox>
      </ContentWrapper>
      {userInfo?.role === 'ROLE_FUNDRAISER' && <Pencil src="/images/Pencil.png" onClick={handleMoveWrite} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
  background-color: white;
`;

const TopContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 14px 24px;
  background: #ffffff;
  box-sizing: border-box;
  width: 420px;
  z-index: 20;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f4f6;

  h1 {
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    color: ${colors.black};
  }

  h3 {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    color: ${colors.gray800};
    cursor: pointer;

    &:hover {
      transition: 0.3s ease-in-out all;
      opacity: 0.7;
    }
  }
`;

const ContentWrapper = styled.div`
  border-top: 12px solid #f2f4f6;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 55px;
  max-width: 420px;
  width: 100%;
  background-color: #fff;
`;

const Pencil = styled.img`
  width: 40px;
  height: 50px;
  position: fixed;
  bottom: 94px;
  transform: translate(900%, 130%);
  cursor: pointer;
`;
