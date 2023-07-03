import styled from '@emotion/styled';
import Header from '../../components/Layout/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Input from '../../components/Input';
import { colors } from '../../styles/colors';
import BottomButton from '../../components/BottomButton';
import { ChangeEvent, useCallback, useState } from 'react';

export default function Signup() {
  return (
    <Container>
      <Header />
      <ContentBox>
        <ChoiceBoxWrapper>
          <ChoiceBox>
            <ChoiceBoxClick>
              <Image src="/images/Cat.svg" width={78} height={50} alt="logo" />
              <MemberName>모금자</MemberName>
            </ChoiceBoxClick>
          </ChoiceBox>
          <ChoiceBox>
            <ChoiceBoxClick>
              <Image src="/images/People.svg" width={78} height={50} alt="logo" />
              <MemberName>후원자</MemberName>
            </ChoiceBoxClick>
          </ChoiceBox>
        </ChoiceBoxWrapper>
        <InputBoxWrapper>
          <InputBox>
            <InputList>
              <Name>닉네임</Name>
              <Input type={'nickname'} placeholder={'닉네임'} name={'email'} width={'42rem'} height={'4rem'} />
            </InputList>
            <InputList>
              <Name>이메일 주소</Name>
              <Input type={'email'} placeholder={'kitty@kitty.co.kr'} name={'email'} width={'42rem'} height={'4rem'} />
            </InputList>
            <InputList>
              <Name>비밀번호</Name>
              <Input type={'password'} placeholder={'8자 이상'} name={'email'} width={'42rem'} height={'4rem'} />
            </InputList>
            <InputList>
              <Name>비밀번호 확인</Name>
              <Input type={'password'} placeholder={'8자 이상'} name={'email'} width={'42rem'} height={'4rem'} />
            </InputList>
          </InputBox>
        </InputBoxWrapper>
        <BottomButton
          title={'회원가입'}
          width={'100%'}
          height={'59px'}
          backgroundColor={'${colors.pink500}'}
          hoverFontColor={'${colors.white}'}
          marginTop="231px"
          position="static"
          // disabled={disabled}
          // onClick={onClick}
        />
      </ContentBox>
    </Container>
  );
}

const Container = styled.div``;

const ContentBox = styled.div`
  display: block;
  justify-content: center;
`;

const ChoiceBoxWrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;

const ChoiceBox = styled.div`
  display: flex;
  margin: 30px;
`;

const ChoiceBoxClick = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
  width: 130px;
  height: 124px;
  border-radius: 5px;
  border: 1.2px solid ${colors.gray500};
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

const InputBoxWrapper = styled.div`
  display: flex;
  top: 100px;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const InputBox = styled.div`
  width: auto;
  position: relative;
`;

const InputList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  margin-left: 30px;

  & input {
    width: 350px;
    height: 40px;
  }
`;

const Name = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 200%;
`;
