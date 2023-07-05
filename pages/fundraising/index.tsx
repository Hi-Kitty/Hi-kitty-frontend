import styled from '@emotion/styled';
import Loading from '../../components/Loading';
import PostCard from '../../components/PostCard/PostCard';
import useGetForumAll from '../../hooks/fundraising/useGetForumAll';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AllPostResponse } from '../../types/post';

export default function Fundraising() {
  const router = useRouter();
  const { ForumData } = useGetForumAll();

  if (ForumData === undefined) {
    return <Loading />;
  }

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
          {ForumData
            ? ForumData.map((list: AllPostResponse) => {
                if (list.id !== null) {
                  return <PostCard list={list} key={list.id} />;
                }
              })
            : '없음'}
        </ContentBox>
      </ContentWrapper>
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
`;

const ContentWrapper = styled.div`
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
