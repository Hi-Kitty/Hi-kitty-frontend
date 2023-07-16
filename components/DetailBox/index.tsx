import styled from '@emotion/styled';
import Image from 'next/image';
import { colors } from '../../styles/colors';

interface Props {
  mode: string;
  setMode?: React.Dispatch<React.SetStateAction<'ROLE_DONER' | 'ROLE_FUNDRAISER'>>;
  setMode2?: React.Dispatch<React.SetStateAction<'닉네임' | '괜찮아요'>>;
  imgUrl: string;
  imgUrl2: string;
  memberName: string;
  memberName2: string;
  onClick1?: () => void;
  onClick2?: () => void;
  margin?: string;
}

export default function DetailBox({
  margin,
  mode,
  imgUrl,
  imgUrl2,
  memberName,
  memberName2,
  onClick1,
  onClick2,
}: Props) {
  return (
    <>
      <ChoiceBox margin={margin}>
        <ChoiceBoxClick current={mode === 'ROLE_DONER' ? 'ROLE_DONER' : '닉네임'} mode={mode} onClick={onClick1}>
          <Image src={imgUrl} width={78} height={50} alt="logo" />
          <MemberName>{memberName}</MemberName>
        </ChoiceBoxClick>
      </ChoiceBox>
      <ChoiceBox margin={margin}>
        <ChoiceBoxClick
          current={mode === 'ROLE_FUNDRAISER' ? 'ROLE_FUNDRAISER' : '괜찮아요'}
          mode={mode}
          onClick={onClick2}
        >
          <Image src={imgUrl2} width={78} height={50} alt="logo" />
          <MemberName>{memberName2}</MemberName>
        </ChoiceBoxClick>
      </ChoiceBox>
    </>
  );
}

const ChoiceBox = styled.div<{ margin?: string }>`
  display: flex;
  margin: ${({ margin }) => margin ?? '30px'};
`;

const ChoiceBoxClick = styled.div<{ mode: string; current: string }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  width: 130px;
  height: 124px;
  border-radius: 5px;
  border: ${({ mode, current }) => (mode === current ? colors.gray900 : colors.gray500)} solid 1px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out all;
    opacity: 1;
  }
`;

const MemberName = styled.div`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
  padding-top: 10px;
`;
