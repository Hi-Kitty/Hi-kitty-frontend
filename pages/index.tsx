import styled from '@emotion/styled';
import Header from '../components/Layout/Header';
import { colors } from '../styles/colors';
import BottomButton from '../components/BottomButton';
import { useRouter } from 'next/router';
import Footer from '../components/Layout/Footer';
import Carousel from './Landing/Carousel';
import Image from 'next/image';
import useScroll from '../utils/useScroll';
import { keyframes } from '@emotion/react';

export default function Home() {
  const router = useRouter();
  const { scrollY } = useScroll();

  const handleMoveFundraising = () => {
    router.push('/fundraising');
  };

  return (
    <Container>
      <Header />
      <ContentBox>
        <FirstSection>
          <FontBox>
            <h1>
              <span>하이키티</span>와
              <br />
              <span>키치</span>한 동행
              <br />
              함께해요.
            </h1>
            <p>
              블록체인으로 투명한 기부금 관리
              <br />
              우리만의 자유로운 후원금 기부
            </p>
          </FontBox>
          <BottomButton
            title={'하이키티로'}
            width="50%"
            height={'59px'}
            borderRadius="40px"
            onClick={handleMoveFundraising}
          />
        </FirstSection>
      </ContentBox>
      <SecondSection>
        <ImageBox src="/images/Phone.png" alt="하이키티" width={100} height={100} />
      </SecondSection>
      <ThirdSection>
        <h3 className={scrollY > 200 ? 'on' : 'off'}>지금까지 본 적 없었던</h3>
        {/* <br /> */}
        <h3 className={scrollY > 200 ? 'on' : 'off'}>투명한 개인 도네이션 서비스</h3>
      </ThirdSection>
      <FifthSection className={scrollY > 800 ? 'on' : 'off'}>
        <h3>협력 단체</h3>
        <Carousel
          banners={[
            <Image key={1} src="/images/TeamLogo1.png" alt="하이키티" width={420} height={160} />,
            <Image key={2} src="/images/TeamLogo2.png" alt="하이키티" width={420} height={160} />,
            <Image key={3} src="/images/TeamLogo3.png" alt="하이키티" width={420} height={160} />,
            <Image key={4} src="/images/TeamLogo4.png" alt="하이키티" width={420} height={160} />,
            <Image key={5} src="/images/TeamLogo5.png" alt="하이키티" width={420} height={160} />,
          ]}
        />
      </FifthSection>
      <FourthSection>
        <h3 className={scrollY > 1220 ? 'on' : 'off'}>
          <span>하이키티</span>가
          <br />
          <span>키치</span>한 이유
        </h3>
        <TextBox className={scrollY > 1220 ? 'on' : 'off'}>
          <p>모금 시작부터 끝까지 기록해요.</p>
          <br />
          <p>소액기부도 좋아요.</p>
        </TextBox>
        <ImageBox
          className={scrollY > 1220 ? 'on' : 'off'}
          src="/images/LandingImg.svg"
          alt="하이키티"
          width={100}
          height={100}
        />
      </FourthSection>
      <LastSection>
        <ImageBox
          className={scrollY > 2170 ? 'on' : 'off'}
          src="/images/HIkitty-white.svg"
          alt="하이키티"
          width={100}
          height={100}
          style={{ marginTop: '200px' }}
        />
        <h3 className={scrollY > 2170 ? 'on' : 'off'}>
          하이키티에서
          <br />
          나만의 후원을 시작해보세요.
        </h3>
        <BottomButton
          title={'하이키티로'}
          width="50%"
          height={'59px'}
          borderRadius="40px"
          onClick={handleMoveFundraising}
          marginTop="50px"
        />
      </LastSection>

      <Footer />
    </Container>
  );
}
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 50px, 0px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  flex-direction: column;
  min-height: 3600px;
  justify-content: flex-start;
  background-color: ${colors.white};
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const FirstSection = styled.div`
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  display: flex;
  width: 100%;
  animation: identifier 1.3s ease-in-out;

  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
  }
`;

const FontBox = styled.div`
  color: ${colors.black};
  margin-top: 54px;

  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 50px;
    line-height: 1.435;
    letter-spacing: -0.06em;
  }

  span {
    color: ${colors.pink500};
  }

  p {
    text-align: center;
    font-size: 17px;
    line-height: 140%;
    margin: 40px 0px 40px 20px;
  }
`;

const SecondSection = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 100%;

  &.on {
    animation: ${fadeInUp} 1.5s ease-in-out;
  }

  &.off {
    opacity: 0;
  }
`;

const ImageBox = styled.img`
  margin-top: 150px;
  width: 90%;
  height: 100%;

  &.on {
    animation: 0.5s ease-in-out 1s 1 normal forwards running ${fadeInUp};
  }

  &.off {
    opacity: 0;
  }
`;

const ThirdSection = styled.div`
  display: flex;
  width: 100%;
  background-color: ${colors.pink500};
  height: 300px;
  align-items: center;
  margin-top: -40px;
  justify-content: center;
  color: ${colors.white};
  flex-direction: column;

  h3 {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.06em;
    text-align: center;

    &.on {
      animation: ${fadeInUp} 1.5s ease-in-out;
    }
    &.off {
      opacity: 0;
    }
  }
`;

const FourthSection = styled.div`
  width: 100%;
  min-height: 900px;
  max-height: 100%;
  color: rgb(255, 255, 255);
  text-align: left;
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray900};
  padding-left: 20px;

  h3 {
    margin-top: 100px;
    font-weight: 800;
    font-size: 40px;
    line-height: 160%;
    letter-spacing: -0.06em;

    &.on {
      animation: 0.5s ease-in-out 0s 1 normal forwards running ${fadeInUp};
    }
    &.off {
      opacity: 0;
    }
  }

  span {
    color: ${colors.pink500};
  }

  img {
    margin-top: 50px;
    width: 100%;
    height: 100%;
  }
`;

const TextBox = styled.div`
  margin-top: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20%;
  letter-spacing: -0.06em;

  p {
    margin-bottom: 20px;
  }

  &.on {
    animation: 0.5s ease-in-out 0s 1 normal forwards running ${fadeInUp};
  }
  &.off {
    opacity: 0;
  }
`;

const FifthSection = styled.div`
  width: 100%;
  min-height: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding-left: 20px;

  h3 {
    margin-top: 90px;
    margin-bottom: 50px;
    font-weight: 600;
    font-size: 25px;
    letter-spacing: -0.06em;
  }

  &.on {
    animation: ${fadeInUp} 1.5s ease-in-out;
  }

  &.off {
    opacity: 0;
  }
`;

const LastSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.black};
  min-height: 724px;

  img {
    width: 100%;
    height: 100%;
  }

  h3 {
    margin-top: 40px;
    font-weight: 800;
    font-size: 25px;
    line-height: 160%;
    letter-spacing: -0.06em;
    color: ${colors.white};
    &.on {
      animation: 0.5s ease-in-out 1.5s 1 normal forwards running ${fadeInUp};
    }

    &.off {
      opacity: 0;
    }
  }
`;
