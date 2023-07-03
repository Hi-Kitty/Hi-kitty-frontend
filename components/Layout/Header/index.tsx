import styled from '@emotion/styled';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      <LeftBox>
        <KittyLogo>HI KITTY</KittyLogo>
      </LeftBox>
    </Container>
  );
}

const Container = styled.div`
  max-width: 420px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  transition: top 0.5s ease-in-out;
`;

const LeftBox = styled.div`
  position: absolute;
  overflow: hidden;
  top: 20px;
  left: 10px;
  bottom: 0;
`;

const KittyLogo = styled.a`
  font-family: 'Baloo';
  font-weight: bold;
  color: #ec6699;
  font-size: 28px;
  line-height: 20px;
  letter-spacing: 0.16px;
  cursor: pointer;
`;
