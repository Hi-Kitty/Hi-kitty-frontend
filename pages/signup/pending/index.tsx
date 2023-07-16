import { useRouter } from 'next/router';
import BottomButton from '../../../components/BottomButton';
import styled from '@emotion/styled';
import Header from '../../../components/Layout/Header';

export default function SignupPending() {
  const router = useRouter();

  const handleMoveFundraising = () => {
    router.push('/fundraising');
  };

  return (
    <>
      <Container>
        <Header />
        <ContentBox>
          <SuccessMentBox>
            <SuccessMent>이메일을 전송했습니다.</SuccessMent>
            <Description>메일함을 확인해주세요.</Description>
          </SuccessMentBox>
          <ButtonBox>
            <BottomButton title={'모금페이지로 이동'} width="100%" height={'59px'} onClick={handleMoveFundraising} />
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
