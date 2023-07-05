import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { colors } from '../../styles/colors';
import CardImg from './CardImg';
import { AllPostResponse } from '../../types/post';

export default function PostCard({ list }: { list: AllPostResponse }) {
  const { id, imageUrl, dday, title, fundraiserName, percent } = list;
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/detail/${id}`)}>
      <ImgBox>
        <CardImg img={imageUrl} />
      </ImgBox>
      <Content>
        <DdayBox>
          <span>D-{dday}</span>
        </DdayBox>
        <Title>{title.length < 34 ? title : title.slice(0, 35) + '...'}</Title>
        <Organization>{fundraiserName}</Organization>
        <PercentBox>
          <span>{percent}%</span>
        </PercentBox>
      </Content>
    </Container>
  );
}

const ContainerWrapper = styled.div`
  border-top: 0;
  margin-top: 10px;
  opacity: 0.8;

  &:hover {
    transform: translateY(-2.5px);
    transition: 0.3s ease-in-out all;
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 400px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 20px;
  padding-left: 30px;
`;

const ContentWrapper = styled.div`
  height: 360.78px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 13px 16px -9px rgba(10, 22, 70, 0.1), 0 0 5px rgba(10, 22, 70, 0.06);
  background-color: #fff;
  overflow: hidden;
`;

const RealContent = styled.div`
  display: block;
`;

const Content = styled.div`
  padding: 5px 16px 16px;
`;

const ImgBox = styled.div`
  position: relative;
  height: 60%;
`;

const DdayBox = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray900};
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.072px;
  margin-top: 6px;
`;

const Title = styled.h1`
  margin-top: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: -0.072px;
`;

const Organization = styled.div`
  margin-top: 6px;
  color: ${colors.gray600};
  font-size: 13px;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: -0.052px;
`;

const PercentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 16px;

  span {
    color: ${colors.gray800};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.056px;
  }
`;
