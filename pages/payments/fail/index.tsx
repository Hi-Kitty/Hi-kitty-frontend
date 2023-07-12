import Image from 'next/image';
import BottomButton from '../../../components/BottomButton';
import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export default function FailPage() {
  return (
    <Container>
      <ContentWrapper>
        <ContentMain>
          <Image src="/images/Cat-Fail.svg" width={170} height={120} alt="후원실패" />
          <h2>후원이 정상처리 되지 않았습니다.</h2>
        </ContentMain>
        <GrayContainer>
          <p>• 후원내역과 후원수단을 확인 후 재시도 해보시길 바랍니다.</p>
          <p>• 지속적으로 실패하는 경우 하이키티로 문의바랍니다.</p>
        </GrayContainer>
      </ContentWrapper>
      <BottomButton title={'모금페이지로 이동'} onClick={() => (window.location.href = '/fundraising')} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  h2 {
    font-size: 22px;
    font-weight: 500;
    margin-top: 20px;
  }
`;

const GrayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 40px;
  background-color: ${colors.gray300};
  padding: 30px;

  p {
    font-weight: 400;
    font-size: 14.4px;
    font-weight: 400;
    line-height: 180%;
    letter-spacing: -0.78px;
  }
`;
