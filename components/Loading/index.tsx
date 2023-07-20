import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export default function Loading() {
  return (
    <LoaderContainer>
      <Container>
        <Circle />
      </Container>
      <Container style={{ transform: 'rotate(45deg)' }}>
        <Circle />
      </Container>
      <Container style={{ transform: 'rotate(90deg)' }}>
        <Circle />
      </Container>
      <Container style={{ transform: 'rotate(135deg)' }}>
        <Circle />
      </Container>
      <Container style={{ transform: 'rotate(180deg)' }}>
        <Circle />
      </Container>
      <Container style={{ transform: 'rotate(225deg)' }}>
        <Circle />
      </Container>
      <Container style={{ transform: 'rotate(270deg)' }}>
        <Circle />
      </Container>
      <Container style={{ transform: 'rotate(315deg)' }}>
        <Circle />
      </Container>
      <Loader>
        <Circle style={{ width: '60px', height: '60px', top: '20px' }} />
      </Loader>
    </LoaderContainer>
  );
}

const Container = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  transform-origin: center;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  background-color: ${colors.pink400};
  left: calc(50% - 40px);
  border-radius: 50px;
`;

const LoaderContainer = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 250px);
  transform: scale(0.5);
`;

const Loader = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  transform-origin: center;
  animation: anim 5s infinite ease-in-out;

  @keyframes anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
