import { useRouter } from 'next/router';
import BottomButton from '../../../components/BottomButton';
import styled from '@emotion/styled';
import Header from '../../../components/Layout/Header';

export default function SignupSuccess() {
  const router = useRouter();

  return (
    <>
      <Container>
        <Header />
        <ContentBox>
          <SuccessMentBox>
            <SuccessMent>가입이 완료되었습니다!</SuccessMent>
            <Description>하이키티와 키치한 동행 함께해요.</Description>
          </SuccessMentBox>
          <ButtonBox>
            <BottomButton
              title={'로그인 하러 가기'}
              width="100%"
              height={'59px'}
              onClick={() => {
                router.push('/login');
              }}
            />
          </ButtonBox>
        </ContentBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
`;

const SuccessMentBox = styled.div`
  align-items: start;
  width: 100%;
  line-height: 140%;
  font-size: 24px;
  margin-left: 20px;
`;

const SuccessMent = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Description = styled.h4`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
`;
