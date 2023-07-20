import BottomButton from '../../../components/BottomButton';
import styled from '@emotion/styled';
import Header from '../../../components/Layout/Header';

interface FormProps {
  mainTitle: string;
  miniTitle: string;
  title: string;
  onClick: () => void;
}

export default function Form({ mainTitle, miniTitle, title, onClick }: FormProps) {
  return (
    <>
      <Container>
        <Header />
        <ContentBox>
          <SuccessMentBox>
            <SuccessMent>{mainTitle}</SuccessMent>
            <Description>{miniTitle}</Description>
          </SuccessMentBox>
          <ButtonBox>
            <BottomButton title={title} width="100%" height={'59px'} onClick={onClick} />
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
