import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Input from '../../components/Input';
import BottomButton from '../../components/BottomButton';
import Header from '../../components/Layout/Header';
import { colors } from '../../styles/colors';
import DetailBox from '../../components/DetailBox';
import { useCreate } from '../../orval/api/유저-기부자-모금자-공통-api/유저-기부자-모금자-공통-api';

export default function Signup() {
  const router = useRouter();
  const [mode, setMode] = useState<'ROLE_DONER' | 'ROLE_FUNDRAISER'>('ROLE_DONER');
  const [fields, setFields] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const createMutation = useCreate();

  const validateField = (value: string, fieldName: string) => {
    type FieldValidation = {
      regex?: RegExp;
      emptyErrorText: string;
      regexErrorText: string;
    };

    const fieldValidations: Record<string, FieldValidation> = {
      email: {
        regex: /^[A-Za-z0-9]+@[^\s@]+\.[^\s@]+$/,
        emptyErrorText: '이메일을 입력해주세요.',
        regexErrorText: '이메일 주소를 정확히 입력해주세요.',
      },
      nickname: {
        regex: /^[가-힣a-zA-Z]{2,10}$/,
        emptyErrorText: '닉네임을 입력해주세요. (10글자 이하)',
        regexErrorText: '한글/영문으로 입력해주세요. (10글자 이하)',
      },
      password: {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{8,}$/,
        emptyErrorText: '비밀번호를 입력해주세요. (8글자 이상)',
        regexErrorText: '공백없이 숫자, 대문자, 소문자가 하나씩 포함되어야 합니다. (8글자 이상)',
      },
      passwordCheck: {
        emptyErrorText: '비밀번호 확인을 입력해주세요.',
        regexErrorText: '비밀번호가 일치하지 않습니다.',
      },
    };

    if (value.length === 0 || value === '') {
      setErrors(prevErrors => ({ ...prevErrors, [fieldName]: fieldValidations[fieldName].emptyErrorText }));
    } else {
      const { regex, regexErrorText } = fieldValidations[fieldName];

      if (regex && !regex.test(value)) {
        setErrors(prevErrors => ({ ...prevErrors, [fieldName]: regexErrorText }));
      } else if (fieldName === 'passwordCheck' && fields.password !== value) {
        setErrors(prevErrors => ({ ...prevErrors, passwordCheck: fieldValidations[fieldName].regexErrorText }));
      } else {
        setErrors(prevErrors => ({ ...prevErrors, [fieldName]: '' }));
      }
    }
  };

  const onChangeField = (e: any, fieldName: string) => {
    const { value } = e.target;
    setFields(prevFields => ({ ...prevFields, [fieldName]: value }));
    validateField(value, fieldName);
  };

  const isButtonDisabled =
    Object.values(fields).some(value => value === '') ||
    Object.values(errors).some(error => error !== '') ||
    fields.password !== fields.passwordCheck;

  const handleSignup = () =>
    createMutation.mutate(
      {
        data: {
          email: fields.email,
          name: fields.nickname,
          password: fields.password,
          role: mode,
        },
      },
      {
        onSuccess: data => {
          data.success && router.push(`/signup/pending`);
        },
        onError: error => {
          console.log(error);
          window.alert('회원가입에 실패했습니다.');
        },
      }
    );

  return (
    <Container>
      <Header />
      <Box>
        <ChoiceBoxWrapper>
          <DetailBox
            mode={mode}
            setMode={setMode}
            imgUrl="/images/Cat.svg"
            imgUrl2="/images/People.svg"
            memberName="모금자"
            memberName2="후원자"
            onClick1={() => setMode('ROLE_DONER')}
            onClick2={() => setMode('ROLE_FUNDRAISER')}
          />
        </ChoiceBoxWrapper>
        <InputBox>
          <Name style={{ color: errors.email ? colors.red400 : colors.black }}>이메일</Name>
          <Input
            id="email"
            type="email"
            placeholder="예) kitty@kitty.co.kr"
            value={fields.email}
            onChange={e => onChangeField(e, 'email')}
          />
          {errors.email && <HiddenMessage style={{ color: 'red' }}>{errors.email}</HiddenMessage>}
        </InputBox>
        <InputBox>
          <Name style={{ color: errors.nickname ? colors.red400 : colors.black }}>
            닉네임
            <Input id="id" type="text" value={fields.nickname} onChange={e => onChangeField(e, 'nickname')} />
            {errors.nickname && <HiddenMessage style={{ color: 'red' }}>{errors.nickname}</HiddenMessage>}
          </Name>
        </InputBox>
        <InputBox>
          <Name style={{ color: errors.password ? colors.red400 : colors.black }}>
            비밀번호
            <Input id="password" type="password" value={fields.password} onChange={e => onChangeField(e, 'password')} />
            {errors.password && <HiddenMessage style={{ color: 'red' }}>{errors.password}</HiddenMessage>}
          </Name>
        </InputBox>
        <InputBox>
          <Name style={{ color: errors.passwordCheck ? colors.red400 : colors.black }}>
            비밀번호 확인
            <Input
              id="password-check"
              type="password"
              value={fields.passwordCheck}
              onChange={e => onChangeField(e, 'passwordCheck')}
            />
            {errors.passwordCheck && <HiddenMessage style={{ color: 'red' }}>{errors.passwordCheck}</HiddenMessage>}
          </Name>
        </InputBox>
        <ButtonBox>
          <BottomButton
            title="회원가입"
            width="100%"
            height="59px"
            backgroundColor={colors.pink500}
            hoverFontColor={colors.white}
            disabled={isButtonDisabled}
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
