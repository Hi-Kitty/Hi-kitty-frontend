import styled from '@emotion/styled';
import Loading from '../../../components/Loading';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProgressBar from '../../../components/ProgressBar';
import { colors } from '../../../styles/colors';
import useGetForumDetail from '../../../hooks/fundraising/useGetForumDetail';
import { useMemo } from 'react';
import Body from '../../../components/Fundraising/Detail/Body';
import { PlanResponse } from '../../../types/post';
import convertDateYear from '../../../utils/convertDateYear';
import Plan from '../../../components/Fundraising/Detail/Plan';

export default function Detail() {
  const router = useRouter();
  const boardId = useMemo(() => {
    if (!router.query.id) return 0;
    return Number(router.query.id);
  }, [router.query.id]);

  const { data } = useGetForumDetail(boardId);

  if (data === undefined) {
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
      <ContentWrapper>
        <ContentBox>
          <Content>
            <Article>
              <BackgroundImg style={{ backgroundImage: `url(${data?.imageUrl})` }}>
                <TitleNameBox>
                  <TitleName>{data?.subTitle}</TitleName>
                  <span>{data?.fundraiserName}</span>
                </TitleNameBox>
              </BackgroundImg>
            </Article>
            <DateContainer>
              <DateTitle>
                모금기간 : {convertDateYear(String(data?.createAt))} ~ {convertDateYear(String(data?.endAt))}
              </DateTitle>
            </DateContainer>
            <AmountContainer>
              <AmountContent>
                <Amount>{data?.currentAmount}원</Amount>
                <ProgressBar percent={Number(data?.percent ?? '0')} marginBottom="3px" />
                <TargetAmount>{data?.targetAmount}원</TargetAmount>
              </AmountContent>
            </AmountContainer>
          </Content>
        </ContentBox>
      </ContentWrapper>
      <Body subTitle={data?.subTitle ?? ''} content={data?.content ?? ''} />
      <PlanContainer>
        <h3>모금 사용계획</h3>
        {data?.planResponse?.map((list: PlanResponse) => {
          return <Plan key={list.id} reason={list.reason} amount={list.amount} />;
        })}
      </PlanContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
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
  opacity: 0.3;
`;

const ContentWrapper = styled.div``;

const ContentBox = styled.div`
  background-color: #fff;
  margin-bottom: -150px;
`;
const Content = styled.div`
  margin-bottom: 60px;
  display: block;
`;

const Article = styled.div`
  height: 280px;
  margin-bottom: 25px;
  position: relative;
  width: 100%;
  display: block;
`;

const BackgroundImg = styled.div`
  background-size: cover;
  background-position: center;
  display: table;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-color: #666;
  background-position: 50% 50%;
  table-layout: fixed;
`;

const TitleNameBox = styled.div`
  display: table-cell;
  position: relative;
  z-index: 20;
  text-align: center;
  vertical-align: middle;

  span {
    width: auto;
    font-size: 14px;
    opacity: 0.8;
    max-height: 55px;
    color: ${colors.white};
  }
`;

const TitleName = styled.h3`
  margin-bottom: 11px;
  padding: 0 30px;
  font-size: 24px;
  line-height: 31px;
  max-height: 100px;
  margin: auto;
  font-weight: 400;
  color: ${colors.white};
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const DateTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const AmountContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
`;

const AmountContent = styled.div`
  padding: 20px;
  word-break: break-all;
  vertical-align: top;
`;

const Amount = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.gray900};
  letter-spacing: -0.08px;
`;

const TargetAmount = styled.p`
  font-size: 14px;
  color: ${colors.gray600};
  margin-top: 5px;
  float: right;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.052px;
  padding-bottom: 40px;
`;

const PlanContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
  border-top-color: 1px solid ${colors.gray300};
  padding: 30px 20px 35px 20px;

  h3 {
    letter-spacing: -0.07px;
    font-size: 16px;
    font-weight: 500;
    line-height: 2;
    margin-bottom: 20px;
  }
`;
