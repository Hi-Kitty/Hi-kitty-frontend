import React, { useState } from 'react';
import { colors } from '../../../styles/colors';
import styled from '@emotion/styled';
import DetailBox from '../../../components/DetailBox';
import Input from '../../../components/Input';
import commaNumber from '../../../utils/commaNumber';
import BottomButton from '../../../components/BottomButton';

interface DonateModalProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  amount: string;
  boardImg: string;
  boardTitle: string;
  boardTeam: string;
  memberName: string;
}

export default function DonateModal({
  onSubmit,
  onChange,
  amount,
  boardImg,
  boardTitle,
  boardTeam,
  memberName,
}: DonateModalProps) {
  const [mode, setMode] = useState<'닉네임' | '괜찮아요'>('닉네임');

  return (
    <CheckContainer onSubmit={onSubmit} onClick={e => e.stopPropagation()}>
      <h3>기부하기</h3>
      <ContentBox>
        <ContentWrapper>
          <BoardImg src={boardImg} />
          <BoardTitle>{boardTitle}</BoardTitle>
          <BoardTeam>{boardTeam}</BoardTeam>
        </ContentWrapper>
      </ContentBox>
      <PriceBox>
        <Input type={'text'} width="100%" value={commaNumber(Number(amount))} onChange={onChange} name="amount" />
        <p>원</p>
      </PriceBox>
      <HeartBox>
        <HeartTitle>나눔하트</HeartTitle>
        <p>하트를 누르면 모금 페이지에 후원자님의 하트가 쌓여요.</p>
        <p>원하지 않으시면 괜찮아요를 눌러주세요.</p>
        <ChoiceWrapper>
          <DetailBox
            mode={mode}
            setMode2={setMode}
            imgUrl="/images/Heart.svg"
            imgUrl2="/images/Smile.svg"
            memberName={memberName}
            memberName2="괜찮아요"
            onClick1={() => setMode('닉네임')}
            onClick2={() => setMode('괜찮아요')}
            margin="20px"
          />
        </ChoiceWrapper>
      </HeartBox>
      <BottomButton title={'결제하기'} width="100%" height="50px" opacity={0.95} marginTop="30px" borderRadius="5px" />
    </CheckContainer>
  );
}

const CheckContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  h3 {
    margin-bottom: 7px;
    letter-spacing: -0.07px;
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
  }

  p {
    font-size: 13px;
    font-weight: 300;
    line-height: 140%;
    letter-spacing: -0.052px;
    color: ${colors.gray600};
  }

  span {
    display: flex;
    justify-content: right;
    font-size: 15px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.072px;
    color: ${colors.black};
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: inline-table;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 200px;
  height: 100%;
  margin-bottom: 20px;
`;

const BoardImg = styled.img`
  height: 100%;
  max-width: 297px;
  max-height: 200px;
  border-radius: 5px;
  object-fit: cover;
`;

const BoardTitle = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.07px;
  color: ${colors.black};
`;

const BoardTeam = styled.div`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 300;
  line-height: 140%;
  letter-spacing: -0.052px;
  color: ${colors.gray600};
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 30px;
  width: 100%;
  max-width: 297px;
  height: 50px;
  border-radius: 5px;
  box-sizing: border-box;

  p {
    font-size: 15px;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: -0.072px;
    color: ${colors.black};
  }
`;

const HeartBox = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  width: 297px;
  height: 30%;

  p {
    font-size: 13px;
    font-weight: 300;
    line-height: 130%;
    letter-spacing: -0.052px;
    color: ${colors.gray600};
  }
`;

const HeartTitle = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.072px;
  color: ${colors.black};
`;

const ChoiceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-left: 20px;
  height: 50px;
  margin-left: -1px;
`;
