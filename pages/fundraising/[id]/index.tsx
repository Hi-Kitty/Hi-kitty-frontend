import styled from '@emotion/styled';
import Loading from '../../../components/Loading';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { colors } from '../../../styles/colors';
import useGetForumDetail from '../../../hooks/fundraising/useGetForumDetail';
import { useEffect, useMemo } from 'react';
import Body from '../../../components/Fundraising/Detail/Body';
import { PlanResponse, HeartResponse } from '../../../types/post';
import Plan from '../../../components/Fundraising/Detail/Plan';
import BottomButton from '../../../components/BottomButton';
import Heart from '../../../components/Fundraising/Detail/Heart';
import Team from '../../../components/Fundraising/Detail/Team';
import Head from '../../../components/Fundraising/Detail/Head';

export default function Detail() {
  const router = useRouter();
  const boardId = useMemo(() => {
    if (!router.query.id) return 0;
    return Number(router.query.id);
  }, [router.query.id]);

  const { data, isLoading, isError } = useGetForumDetail(boardId);

  useEffect(() => {
    if (isError) {
      window.alert('서버에 오류가 발생했습니다.');
      router.back();
    }
  }, [isError, router]);

  if (isLoading) {
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
      </TopContainer>
      {data ? (
        <>
          <Head
            title={data?.title ?? ''}
            fundraiserName={data?.fundraiserName ?? ''}
            imageUrl={data?.imageUrl ?? ''}
            createAt={data?.createAt ?? ''}
            endAt={data?.endAt ?? ''}
            currentAmount={data?.currentAmount ?? 0}
            percent={data?.percent ?? 0}
            targetAmount={data?.targetAmount ?? 0}
          />
          <Line />
          <Body subTitle={data?.subTitle ?? ''} content={data?.content ?? ''} />
          <PlanContainer>
            <h3>모금 사용계획</h3>
            {data?.planResponse?.map((list: PlanResponse) => {
              return <Plan key={list.id} reason={list.reason} amount={list.amount} />;
            })}
          </PlanContainer>
          <TeamContainer>
            <Team
              imgUrl={data.imageUrl}
              fundraiserId={data?.fundraiserId}
              fundraiserName={data?.fundraiserName ?? ''}
            />
          </TeamContainer>
          <HeartContainer>
            <h3>나눔 하트</h3>
            <HeartContent>
              <ul>
                {data?.heartResponses?.map((list: HeartResponse) => {
                  console.log(list, 'gmx m');
                  return <Heart key={list.donerId} donerProfileUrl={list.donerProfileUrl} donerName={list.donerName} />;
                })}
              </ul>
            </HeartContent>
          </HeartContainer>
          <ButtonBox>
            <BottomButton title={'후원하기'} width="100%" height="68px" opacity={0.95} />
          </ButtonBox>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding-bottom: 70px;
`;

const TopContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 14px 24px;
  background: #ffffff;
  box-sizing: border-box;
  width: 420px;
  z-index: 100;
  opacity: 0.3;
`;

const PlanContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
  border-top-color: 1px solid ${colors.gray300};
  padding: 30px 20px 5px 20px;

  h3 {
    letter-spacing: -0.07px;
    font-size: 18px;
    font-weight: 500;
    line-height: 2;
  }
`;
const TeamContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
  padding: 30px 20px 25px 20px;
`;

const HeartContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 40px 0 15px 20px;
  width: 100%;
  border-top: 1px solid ${colors.gray300};

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 7px;
  }
`;

const HeartContent = styled.div`
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  ul {
    line-height: 2;
    display: flex;
    width: 100%;
    list-style: none;
    font-size: 18px;
    color: ${colors.gray900};
    gap: 7px;
  }
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
`;

const Line = styled.div`
  border-top: 1px solid ${colors.gray300};
  width: 100%;
`;
