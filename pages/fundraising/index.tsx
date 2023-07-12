import styled from '@emotion/styled';
import Loading from '../../components/Loading';
import PostCard from '../../components/PostCard/PostCard';
import useGetForumAll from '../../hooks/fundraising/useGetForumAll';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AllPostResponse } from '../../types/post';
import { useMemo } from 'react';
import { useGetByEmail } from '../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';

export default function Fundraising() {
  const router = useRouter();
  const { data } = useGetForumAll();
  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;

  const ForumData = useMemo(() => {
    return data?.response?.content ?? [];
  }, [data]);

  if (ForumData === undefined) {
    return <Loading />;
  }

  const handleMoveWrite = () => {
    router.push('/write');
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
      </TopContainer>
      <ContentWrapper>
        <ContentBox>
          {!!ForumData ? (
            ForumData.map((list: AllPostResponse) => {
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
