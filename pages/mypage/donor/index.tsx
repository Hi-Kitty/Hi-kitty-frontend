import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import Header from '../../../components/Layout/Header';
import ProfileImg from '../../../components/ProfileImg';
import ProfileInfo from '../../../components/ProfileInfo';
import { useGetByEmail } from '../../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import {
  useGetOrders,
  useGetTotals,
} from '../../../orval/api/기부자용-하트-생성-및-프로필-관련-api/기부자용-하트-생성-및-프로필-관련-api';
import { GetOrdersParams } from '../../../orval/model';

import DonorList from './DonorList';
import Footer from '../../../components/Layout/Footer';
import DonorListNone from './DonorListNone';
import commaNumber from '../../../utils/commaNumber';
import { useRouter } from 'next/router';

const PAGE_PARAM = {
  page: 0,
  size: 100000,
} as unknown as GetOrdersParams;

export default function DonorMainProfile() {
  const router = useRouter();
  const getUserInfoStatus = useGetByEmail();
  const getTotalCount = useGetTotals();
  const getOrders = useGetOrders(PAGE_PARAM);

  const userInfo = getUserInfoStatus.data?.response;
  const userTotalCount = getTotalCount.data?.response;
  const donorList = getOrders.data?.response?.content;

  const handleLogout = (): void => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <Container>
      <Header />
      <ContentBox>
        <ProfileImg profileImgSrc={userInfo?.url} />
        <DonorProfile>
          <ProfileInfo email={userInfo?.email ?? ''} name={userInfo?.name ?? ''} />
          <DonationListWrapper>
            <DonationListTitle>후원내역</DonationListTitle>
            {donorList && donorList?.length > 0 ? (
              <>
                <EntireCount>
                  <CountBox>
                    <ValueName>총후원금</ValueName>
                    <Value>{commaNumber(Number(userTotalCount?.totalAmount))}원</Value>
                  </CountBox>
                  <VerticalLine />
                  <CountBox>
                    <ValueName>후원횟수</ValueName>
                    <Value>{userTotalCount?.amountCount}회</Value>
                  </CountBox>
                </EntireCount>
                <HorizontalLine />
                <DonorList donorlist={donorList} />
              </>
            ) : (
              <DonorListNone />
            )}
            <Logout>
              <p onClick={handleLogout}>로그아웃</p>
            </Logout>
          </DonationListWrapper>
        </DonorProfile>
      </ContentBox>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const ContentBox = styled.div`
  display: block;
  justify-content: center;
`;

const DonorProfile = styled.div``;

const DonationListWrapper = styled.div``;

const DonationListTitle = styled.h3`
  font-size: 18px;
  color: ${colors.black};
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.072px;
  padding: 21px 0 27px 17px;
`;

const EntireCount = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const CountBox = styled.div`
  text-align: center;
`;

const ValueName = styled.p`
  font-size: 13px;
  color: #29292e;
  font-size: 13px;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.052px;
`;

const Value = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.072px;
`;

const VerticalLine = styled.div`
  height: 64px;
  border-right: 1px solid #c4c4c4;
  margin-bottom: 5px;
`;

const HorizontalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 29px;
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
