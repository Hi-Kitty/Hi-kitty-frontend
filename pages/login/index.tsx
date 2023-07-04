import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { useRouter } from 'next/router';
import Header from '../../components/Layout/Header';
import Input from '../../components/Input';
import BottomButton from '../../components/BottomButton';
import { useState } from 'react';

export default function Login() {
  const [userid, setUserId] = useState({ value: '', text: '', hidden: true });
  const [userPassword, setUserPassword] = useState({ value: '', text: '', hidden: true });
  const router = useRouter();

  const checkUserId = (value: string) => {
    if (value.length === 0 || value === '') {
      setUserId({ value: value, text: '이메일을 입력해주세요.', hidden: false });
      return;
    }
    setUserId({ value: value, text: '', hidden: true });
  };

  const checkUserPassword = (value: string) => {
    if (value.length === 0 || value === '') {
      setUserPassword({ value: value, text: '비밀번호를 입력해주세요.', hidden: false });
      return;
    }
    setUserPassword({ value: value, text: '', hidden: true });
  };

  return (
    <>
      <Header />
      <Container>
        <ContentWrapper>
          <Content>
            <KittyLogo>HI KITTY</KittyLogo>
            <InputBox>
              <TitleName style={{ color: !userid.hidden ? colors.red400 : colors.black }}>이메일 주소</TitleName>
              <InputItem>
                <Input
                  id="id"
                  type={'text'}
                  placeholder={'예) kitty@kitty.co.kr'}
                  name="email"
                  onChange={e => checkUserId(e.target.value)}
                />
              </InputItem>
              <ErrorMsg>
                <span hidden={userid.hidden}>{userid.text}</span>
              </ErrorMsg>
            </InputBox>
            <InputBox>
              <TitleName style={{ color: !userPassword.hidden ? colors.red400 : colors.black }}>비밀번호</TitleName>
              <InputItem>
                <Input
                  id="password"
                  type={'password'}
                  name="password"
                  onChange={e => checkUserPassword(e.target.value)}
                />
              </InputItem>
              <ErrorMsg>
                <span hidden={userPassword.hidden}>{userPassword.text}</span>
              </ErrorMsg>
            </InputBox>
          </Content>
          <BottomButton title={'로그인'} borderRadius="8px" />
          <SignupBox>
            <span>아직 회원이 아니신가요?</span>
            <span onClick={() => router.push('/signup')}>회원가입</span>
          </SignupBox>
        </ContentWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 52px;
  position: relative;
  overflow-anchor: none;
  box-sizing: border-box;
  display: block;
`;

const ContentWrapper = styled.div`
  padding: 0 24px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  padding: 50px 0 87px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: -70px;
`;

const KittyLogo = styled.h1`
  font-family: 'Baloo';
  font-weight: bold;
  color: ${colors.pink500};
  display: flex;
  justify-content: center;
  text-align: center;
  height: 80px;
  font-size: 28px;
`;

const InputBox = styled.div`
  position: relative;
  padding: 10px 0 14px;
  padding-bottom: 40px;
`;

const TitleName = styled.h3`
  font-size: 13px;
  line-height: 23px;
  letter-spacing: -0.02px;
`;

const InputItem = styled.div`
  position: relative;
`;

const ErrorMsg = styled.p`
  display: block;
  position: absolute;
  line-height: 19px;
  color: ${colors.red400};
  font-size: 11px;
`;

const SignupBox = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  font-size: 13px;
  color: ${colors.gray500};

  span {
    margin-left: 5px;
  }

  span:nth-of-type(2) {
    cursor: pointer;
    text-decoration: underline;
    color: ${colors.gray600};

    :hover {
      transition: color 0.14s ease-in-out;
      color: ${colors.black};
      font-weight: 500;
    }
  }
`;
