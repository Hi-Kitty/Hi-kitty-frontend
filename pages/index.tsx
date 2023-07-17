import styled from '@emotion/styled';
import Header from '../components/Layout/Header';
import { colors } from '../styles/colors';
import BottomButton from '../components/BottomButton';
import { useRouter } from 'next/router';
import Footer from '../components/Layout/Footer';
import Carousel from './Landing/Carousel';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

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
        <h3>지금까지 본 적 없었던</h3>
        {/* <br /> */}
        <h3>투명한 개인 도네이션 서비스</h3>
      </ThirdSection>
      <FifthSection>
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
        <h3>
          <span>하이키티</span>가
          <br />
          <span>키치</span>한 이유
        </h3>
        <TextBox>
          <p>모금 시작부터 끝까지 기록해요.</p>
          <br />
          <p>소액기부도 좋아요.</p>
        </TextBox>
        <ImageBox src="/images/LandingImg.svg" alt="하이키티" width={100} height={100} />
      </FourthSection>
      <LastSection>
        <h3>그누구도</h3>
        <h3>예상못한</h3>
        <h3>후원</h3>
        <ImageBox
          src="/images/HIkitty-white.svg"
          alt="하이키티"
          width={100}
          height={100}
          style={{ marginTop: '400px' }}
        />
        <BottomButton
          title={'하이키티로'}
          width="50%"
          height={'59px'}
          borderRadius="40px"
          onClick={handleMoveFundraising}
          marginTop="100px"
        />
      </LastSection>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  height: 3400px;
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
`;

const ImageBox = styled.img`
  margin-top: 150px;
  width: 90%;
  height: 100%;
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
`;

const LastSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  background-color: ${colors.black};
  min-height: 2324px;

  img {
    margin-top: 50px;
    width: 100%;
    height: 100%;
  }

  h3 {
    margin-top: 400px;
    font-weight: 800;
    font-size: 40px;
    line-height: 160%;
    letter-spacing: -0.06em;
    color: ${colors.white};
  }
`;
