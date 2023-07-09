import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import ProfileInput from '../../components/ProfileInput';
import BottomButton from '../../components/BottomButton';
import Image from 'next/image';

export default function FundraiserProfileSettingPassword() {

    return(
            <Container>
                <Header />
                    <Thumbnail>
                        <ThumbnailList>
                            <a href="#"><Image src="../images/previous.svg" width={13} height={20} alt='previous' /></a>
                        </ThumbnailList>
                        <Image src="../images/donor.svg" width={65} height={65} alt="donor_profile" />
                    </Thumbnail>
                    <ProfileModifyWrapper>
                        <ProfileModifyName>프로필 수정</ProfileModifyName>
                        <ProfileModifyInfo>
                            <ProfileInputList>
                                <ModifyInfo>비밀번호</ModifyInfo>
                                <ProfileInput type={'password'} placeholder={'8자 이상'} name={'password'} />
                            </ProfileInputList>
                            
                            <ProfileInputList>
                                <ModifyInfo>비밀번호 확인</ModifyInfo>
                                <ProfileInput type={'password'} placeholder={'8자 이상'} name={'password'} />
                            </ProfileInputList>
                        </ProfileModifyInfo>
                        <BottomButton title={'저장하기'} borderRadius="8px"/>
                    </ProfileModifyWrapper>
                <Footer />    
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

const ProfileModifyWrapper = styled.div`
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

const SaveButton = styled.div``;
