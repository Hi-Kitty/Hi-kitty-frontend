import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import Header from '../../../components/Layout/Header';
import ProfileInput from '../../../components/ProfileInput';
import BottomButton from '../../../components/BottomButton';
import Image from 'next/image';
import {
  useGetByEmail,
  useUpdatePassword,
} from '../../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { UserUpdateRequest } from '../../../orval/model';
import { useRouter } from 'next/router';
import 'react-pure-modal/dist/react-pure-modal.min.css';

const initialForm = {
  name: '',
  password: '',
  passwordCheck: '',
};

export default function DonorProfileSetting() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [imgSrc, setImgSrc] = useState('');
  const [file, setFile] = useState<File>();

  const getUserInfoStatus = useGetByEmail();
  const updatePasswordMutate = useUpdatePassword();

  const userInfo = getUserInfoStatus.data?.response;

  useEffect(() => {
    if (getUserInfoStatus.status === 'success') {
      setForm(form => ({
        ...form,
        name: userInfo?.name ?? form.name,
      }));
      setImgSrc(String(userInfo?.url));
    }
  }, [getUserInfoStatus.status, userInfo?.name, userInfo?.url]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm(form => ({
      ...form,
      [name]: value,
    }));
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setFile(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestForm: UserUpdateRequest = {
      name: form.name,
      password: form.password,
    };

    updatePasswordMutate.mutate({
      data: {
        request: requestForm,
        img: file,
      },
    });
  };

  return (
    <Container>
      <Header />
      <Thumbnail>
        <ThumbnailList>
          <BackButton onClick={() => router.back()}>
            <Image src="/images/ArrowBack.svg" width={18} height={20} alt="previous" />
          </BackButton>
        </ThumbnailList>
        <Image src={String(userInfo?.url ?? '')} width={65} height={65} alt="donor_profile" />
      </Thumbnail>
      <ProfileModifyWrapper onSubmit={handleSubmit}>
        <ProfileModifyName>프로필 수정</ProfileModifyName>
        <input type="file" onChange={handleChangeFile} />
        <ProfileModifyInfo>
          {userInfo?.role === 'ROLE_DONER' && (
            <ProfileInputList>
              <ModifyInfo>닉네임</ModifyInfo>
              <ProfileInput
                type={'text'}
                placeholder={'닉네임'}
                name={'name'}
                value={form.name}
                onChange={handleChange}
              />
            </ProfileInputList>
          )}
          <ProfileInputList>
            <ModifyInfo>비밀번호</ModifyInfo>
            <ProfileInput
              type={'password'}
              placeholder={'8자 이상'}
              name={'password'}
              value={form.password}
              onChange={handleChange}
            />
          </ProfileInputList>
          <ProfileInputList>
            <ModifyInfo>비밀번호 확인</ModifyInfo>
            <ProfileInput
              type={'password'}
              placeholder={'8자 이상'}
              name={'passwordCheck'}
              value={form.passwordCheck}
              onChange={handleChange}
            />
          </ProfileInputList>
        </ProfileModifyInfo>
        <BottomButton title={'저장하기'} borderRadius="8px" />
      </ProfileModifyWrapper>
    </Container>
  );
}

const Container = styled.div``;

const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 131px;
  background-color: ${colors.gray300};
`;

const ThumbnailList = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
`;

const ProfileModifyWrapper = styled.form`
  margin: 12px 30px 100px 17px;
`;
const ProfileModifyName = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.072px;
  margin-bottom: 29px;
`;

const ProfileModifyInfo = styled.div`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.056px;
  margin-bottom: 54px;
`;

const ProfileInputList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
`;
const ModifyInfo = styled.div`
  display: inline;
`;

const BackButton = styled.div`
  cursor: pointer;
`;
