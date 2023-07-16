import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image';
import { colors } from '../../../../styles/colors';
import PostCard from '../../../../components/PostCard/PostCard';
import { useGetBoards2 } from '../../../../orval/api/게시판-조회-api/게시판-조회-api';
import { GetBoards2Params, PageImageGet } from '../../../../orval/model';

const PAGE_PARAM = {
  page: 0,
  size: 100000,
} as unknown as GetBoards2Params;

export default function GroupPage() {
  const router = useRouter();
  const fundraiserId = router.query.id ? Number(router.query.id) : 0;
  const boardStatus = useGetBoards2(fundraiserId, PAGE_PARAM, {
    query: {
      enabled: !!Number(fundraiserId),
    },
  });
  const InfoData = boardStatus.data?.response?.content;
  const firstData = (InfoData && InfoData[0]) ?? {};

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
      </TopContainer>
      <TeamContainer>
        <TeamContent>
          <img
            src={firstData && (firstData?.fundraiserProfileUrl ? firstData?.fundraiserProfileUrl : '/images/Cat.svg')}
          />

          <p>{firstData?.fundraiserName}</p>
        </TeamContent>
      </TeamContainer>
      <FundingContainer>
        <FundingList>
          <FundingMain>
            <h3>모금함 내역</h3>
            {(InfoData ?? []).length > 0 ? (
              InfoData &&
              InfoData.map(list => {
                if (list.fundraiserName !== null) {
                  return <PostCard list={list as unknown as PageImageGet} key={list.id} />;
                }
              })
            ) : (
              <>
                <EmptyBox>
                  <img src="/images/Cat-hungry.svg" width={250} height={300} alt="ktty" style={{ paddingTop: 5 }} />
                  <span>모금내역이 없어요!</span>
                </EmptyBox>
              </>
            )}
          </FundingMain>
        </FundingList>
      </FundingContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
`;

const TopContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 14px 24px;
  background: #ffffff;
  box-sizing: border-box;
  width: 420px;
  z-index: 100;
  opacity: 0.85;
`;

const TeamContainer = styled.div`
  background-color: ${colors.gray300};
  height: 210px;
  position: relative;
`;

const TeamContent = styled.div`
  padding: 20px 30px 18px;
  position: absolute;
  bottom: 0;

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${colors.white};
  }

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    margin-top: 13px;
    line-height: 140%;
    letter-spacing: -0.05px;
  }
`;

const FundingContainer = styled.div`
  width: 100%;
`;

const FundingList = styled.div`
  margin-top: 0;
  padding: 30px 0 40px 0;
`;

const FundingMain = styled.div`
  h3 {
    padding-left: 30px;
    font-weight: 500;
    margin-bottom: 7px;
    letter-spacing: -0.07px;
    font-size: 16px;
  }
`;

const EmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.05px;
  }
`;
