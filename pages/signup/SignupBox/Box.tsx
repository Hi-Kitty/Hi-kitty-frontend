import styled from '@emotion/styled';
import Image from 'next/image';
import { colors } from '../../../styles/colors';

interface Props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<'ROLE_DONER' | 'ROLE_FUNDRAISER'>>;
}

export default function SignUpBox({ mode, setMode }: Props) {
  return (
    <>
      <ChoiceBox>
        <ChoiceBoxClick current={'ROLE_DONER'} mode={mode} onClick={() => setMode('ROLE_DONER')}>
          <Image src="/images/Cat.svg" width={78} height={50} alt="logo" />
          <MemberName>모금자</MemberName>
        </ChoiceBoxClick>
      </ChoiceBox>
      <ChoiceBox>
        <ChoiceBoxClick current={'ROLE_FUNDRAISER'} mode={mode} onClick={() => setMode('ROLE_FUNDRAISER')}>
          <Image src="/images/People.svg" width={78} height={50} alt="logo" />
          <MemberName>후원자</MemberName>
        </ChoiceBoxClick>
      </ChoiceBox>
    </>
  );
}

const ChoiceBox = styled.div`
  display: flex;
  margin: 30px;
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
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
  padding-top: 10px;
`;
