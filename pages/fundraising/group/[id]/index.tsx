import { useRouter } from 'next/router';

import useGetGroupInfo from '../../../../hooks/fundraising/useGetGroupInfo';
import Loading from '../../../../components/Loading';
import { useMemo } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { colors } from '../../../../styles/colors';
import PostCard from '../../../../components/PostCard/PostCard';
import { Content } from '../../../../types/info';
import Team from '../../../../components/Fundraising/Detail/Team';
import { DetailPostResponse } from '../../../../types/post';
import useGetForumDetail from '../../../../hooks/fundraising/useGetForumDetail';

export default function GroupPage() {
  const router = useRouter();
  const fundraiserId = useMemo(() => {
    if (!router.query.id) return 0;
    return Number(router.query.id);
  }, [router.query.id]);

  const { data, isLoading, isError } = useGetGroupInfo(fundraiserId);
  console.log('data', { data, isLoading, isError, fundraiserId });

  const InfoData = useMemo(() => {
    return data?.response?.content ?? [];
  }, [data]);

  const firstData = useMemo(() => {
    return InfoData?.[0] ?? {};
  }, [InfoData]);

  console.log(InfoData, 'InfoData');

  const { data: detailData } = useGetForumDetail(fundraiserId);
  const DetailData = useMemo(() => {
    return detailData?.content ?? [];
  }, [detailData]);

  // if (InfoData === undefined) {
  //   return <Loading />;
  // }

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
          <img src={firstData?.imageUrl} />
          <p>{firstData?.fundraiserName}</p>
        </TeamContent>
      </TeamContainer>
      <FundingContainer>
        <FundingList>
          <FundingMain>
            <h3>모금함 내역</h3>
            {(InfoData ?? []).length > 0 ? (
              InfoData.map((list: Content) => {
                if (list.fundraiserName !== null) {
                  return <PostCard list={list} key={list.id} />;
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
