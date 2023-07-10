import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Input from '../../components/Input';
import BottomButton from '../../components/BottomButton';
import Header from '../../components/Layout/Header';
import { colors } from '../../styles/colors';
import SignUpBox from './SignupBox/Box';
import instance from '../../api/axios';

export default function Signup() {
  const router = useRouter();
  const [mode, setMode] = useState<'ROLE_DONER' | 'ROLE_FUNDRAISER'>('ROLE_DONER');
  const [nickname, setNickname] = useState({ value: '', text: '', hidden: true });
  const [password, setPassword] = useState({ value: '', text: '', hidden: true });
  const [passwordCheck, setPasswordCheck] = useState({ value: '', text: '', hidden: true });
  const [email, setEmail] = useState({ value: '', text: '', hidden: true });

  const onChangePasswordCheck = (e: any) => {
    setPasswordCheck({
      value: e.target.value,
      text: '',
      hidden: e.target.value === password.value,
    });
  };

  const checkName = (value: string) => {
    if (value.length === 0 || value === '') {
      setNickname({ value: value, text: '닉네임을 입력해주세요.', hidden: false });
      return;
    }

    let checkKor = /^[가-힣a-zA-Z]{2,10}$/;
    if (!checkKor.test(value)) {
      setNickname({
        value: value,
        text: '한글/영문으로 입력해주세요. (10글자 이하)',
        hidden: false,
      });
      return;
    }
    setNickname({ value: value, text: '', hidden: true });
  };

  const checkPassword = (value: string) => {
    if (value.length === 0 || value === '') {
      setPassword({ value: value, text: '비밀번호를 입력해주세요.', hidden: false });
      return;
    }
    let regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,}$/;
    if (!regPass.test(value)) {
      setPassword({
        value: value,
        text: '공백없이 숫자, 대문자, 소문자가 하나씩 포함되어야 합니다. (8글자 이상)',
        hidden: false,
      });
      return;
    }
    setPassword({ value: value, text: '', hidden: true });
  };

  const checkEmail = (value: string) => {
    if (value.length === 0 || value === '') {
      setEmail({ value: value, text: '이메일을 입력해주세요.', hidden: false });
      return;
    }
    const emailRegex = /^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value) || !(value.length >= 5)) {
      setEmail({ value: value, text: '이메일 주소를 정확히 입력해주세요.', hidden: false });
      return;
    }
    setEmail({ value: value, text: '', hidden: true });
  };

  const isButtonDisabled =
    email.hidden &&
    nickname.hidden &&
    password.hidden &&
    passwordCheck.hidden &&
    email.value !== '' &&
    nickname.value !== '' &&
    password.value !== '' &&
    passwordCheck.value !== '' &&
    password.value === passwordCheck.value;

  const handleSignup = () => {
    instance
      .post('/users', {
        email: email.value,
        name: nickname.value,
        password: password.value,
        role: mode,
      })
      .then(res => {
        if (res.data.success) {
          console.log(res.data.message);
          router.push(`/signup/success`);
        } else {
          console.log(res.data.message);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Header />
      <Box>
        <ChoiceBoxWrapper>
          <SignUpBox mode={mode} setMode={setMode} />
        </ChoiceBoxWrapper>
        <InputBox>
          <Name style={{ color: !email.hidden ? colors.red400 : colors.black }}>이메일</Name>
          <Input
            id="email"
            type={'email'}
            placeholder="예) kitty@kitty.co.kr"
            defaultValue={email.value}
            onChange={(e: any) => checkEmail(e.target.value)}
          />
          <HiddenMessage hidden={email.hidden}>{email.text}</HiddenMessage>
        </InputBox>
        <InputBox>
          <Name style={{ color: !nickname.hidden ? colors.red400 : colors.black }}>
            닉네임
            <Input
              id="id"
              type={'text'}
              defaultValue={nickname.value}
              onChange={(e: any) => checkName(e.target.value)}
            />
            <HiddenMessage hidden={nickname.hidden}>{nickname.text}</HiddenMessage>
          </Name>
        </InputBox>
        <InputBox>
          <Name style={{ color: !password.hidden ? colors.red400 : colors.black }}>
            비밀번호
            <Input
              id="password"
              type={'password'}
              defaultValue={password.value}
              onChange={(e: any) => checkPassword(e.target.value)}
            />
            <HiddenMessage hidden={password.hidden}>{password.text}</HiddenMessage>
          </Name>
        </InputBox>
        <InputBox>
          <Name style={{ color: !passwordCheck.hidden ? colors.red400 : colors.black }}>
            비밀번호 확인
            <Input
              id="password-check"
              type={'password'}
              defaultValue={passwordCheck.value}
              onChange={onChangePasswordCheck}
            />
            <HiddenMessage hidden={passwordCheck.hidden}>{passwordCheck.text}</HiddenMessage>
          </Name>
          {!passwordCheck.hidden && <HiddenMessage>비밀번호가 일치하지 않습니다.</HiddenMessage>}
        </InputBox>
        <ButtonBox>
          <BottomButton
            title={'회원가입'}
            width={'100%'}
            height={'59px'}
            backgroundColor={'${colors.pink500}'}
            hoverFontColor={'${colors.white}'}
            disabled={!isButtonDisabled}
            onClick={handleSignup}
          />
        </ButtonBox>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const Box = styled.div`
  display: block;
  justify-content: center;
`;

const ChoiceBoxWrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;

const InputBox = styled.div`
  box-sizing: border-box;
  position: relative;
  padding-bottom: 25px;
  margin-left: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 640;
  line-height: 18px;
`;

const HiddenMessage = styled.span`
  display: block;
  position: absolute;
  line-height: 16px;
  letter-spacing: -0.4px;
  font-size: 11px;
  color: ${colors.red400};
  font-weight: 300;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
  margin-left: -10px;
`;
