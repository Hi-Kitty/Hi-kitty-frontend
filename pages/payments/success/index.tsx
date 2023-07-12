import Image from 'next/image';
import BottomButton from '../../../components/BottomButton';
import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import convertDateYear from '../../../utils/convertDateYear';
import commaNumber from '../../../utils/commaNumber';
import { PaymentResponse } from '../../../orval/model';

export default function SuccessPage({ list }: { list: PaymentResponse }) {
  return (
    <Container>
      <ContentWrapper>
        <ContentMain>
          <Image src="/images/Cat-hungry.svg" width={170} height={120} alt="후원실패" />
          <h2>후원자님, 소중한 후원 감사드립니다!</h2>
          <Line />
        </ContentMain>
        <ListRow>
          <ListName>후원명</ListName>
          <ListValue>{list?.boardName}</ListValue>
        </ListRow>
        <ListRow>
          <ListName>후원단체</ListName>
          <ListValue>{list?.fundraiserName}</ListValue>
        </ListRow>
        <ListRow>
          <ListName>후원금액</ListName>
          <ListValue>
            <span>{commaNumber(Number(list?.balanceAmount))}원</span>
          </ListValue>
        </ListRow>
        <BottomButton title={'확인'} onClick={() => (window.location.href = '/fundraising')} borderRadius="5px" />
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentWrapper = styled.div``;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-top: 20px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray500};
  margin-top: 20px;
`;

const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ListName = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.064px;
  color: ${colors.gray700};
`;

const ListValue = styled.p`
  color: #000;
  text-align: right;
  font-size: 16px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.064px;

  span {
    font-weight: 500;
    color: ${colors.pink500};
  }
`;
