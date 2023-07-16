import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import commaNumber from '../../../utils/commaNumber';
import convertDateYear from '../../../utils/convertDateYear';
import ProgressBar from '../../ProgressBar';

interface HeadProps {
  imageUrl: string;
  title: string;
  fundraiserName: string;
  createAt: string;
  currentAmount: number;
  endAt: string;
  percent: number;
  targetAmount: number;
}

export default function Head({
  imageUrl,
  title,
  fundraiserName,
  createAt,
  endAt,
  currentAmount,
  percent,
  targetAmount,
}: HeadProps) {
  return (
    <ContentWrapper>
      <ContentBox>
        <Content>
          <Article>
            <BackgroundImg style={{ backgroundImage: `url(${imageUrl})` }}>
              <TitleNameBox>
                <TitleName>{title}</TitleName>
                <span>{fundraiserName}</span>
              </TitleNameBox>
            </BackgroundImg>
          </Article>
          <DateContainer>
            <DateTitle>
              모금기간 : {convertDateYear(String(createAt))} ~ {convertDateYear(String(endAt))}
            </DateTitle>
          </DateContainer>
          <AmountContainer>
            <AmountContent>
              <Amount>{commaNumber(currentAmount)}원</Amount>
              <ProgressBar percent={Number(percent ?? '0')} marginBottom="3px" />
              <TargetAmount>{commaNumber(targetAmount)}원</TargetAmount>
            </AmountContent>
          </AmountContainer>
        </Content>
      </ContentBox>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div``;

const ContentBox = styled.div`
  background-color: #fff;
  margin-bottom: -150px;
`;
const Content = styled.div`
  margin-bottom: 60px;
  display: block;
`;

const Article = styled.div`
  height: 280px;
  margin-bottom: 25px;
  position: relative;
  width: 100%;
  display: block;
`;

const BackgroundImg = styled.div`
  background-size: cover;
  background-position: center;
  display: table;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-color: #666;
  background-position: 50% 50%;
  table-layout: fixed;
`;

const TitleNameBox = styled.div`
  display: table-cell;
  position: relative;
  z-index: 20;
  text-align: center;
  vertical-align: middle;

  span {
    width: auto;
    font-size: 14px;
    opacity: 0.8;
    max-height: 55px;
    color: ${colors.white};
  }
`;

const TitleName = styled.h3`
  margin-bottom: 11px;
  padding: 0 30px;
  font-size: 24px;
  line-height: 31px;
  max-height: 100px;
  margin: auto;
  font-weight: 400;
  color: ${colors.white};
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const DateTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const AmountContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
`;

const AmountContent = styled.div`
  padding: 20px;
  word-break: break-all;
  vertical-align: top;
`;

const Amount = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.gray900};
  letter-spacing: -0.08px;
`;

const TargetAmount = styled.p`
  font-size: 14px;
  color: ${colors.gray600};
  margin-top: 5px;
  float: right;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.052px;
  padding-bottom: 40px;
`;
