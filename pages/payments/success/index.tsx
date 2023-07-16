import Image from 'next/image';
import BottomButton from '../../../components/BottomButton';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export default function SuccessPage() {
  const router = useRouter();

  const handleMoveFundraising = () => {
    router.push('/fundraising');
  };

  return (
    <Container>
      <ContentMain>
        <Image src="/images/ChurCat.svg" width={170} height={120} alt="후원성공" />
        <h2>후원자님, 소중한 후원 감사드립니다!</h2>
      </ContentMain>
      <BottomButton title="확인" onClick={handleMoveFundraising} borderRadius="5px" />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

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
