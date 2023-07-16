import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { colors } from '../../styles/colors';
import CardImg from './CardImg';
import ProgressBar from '../ProgressBar';
import Modal from 'react-modal';
import { useState } from 'react';
import { useGetBoard } from '../../api/모금자용-권한용-api/모금자용-권한용-api';
import { useGetByEmail } from '../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import commaNumber from '../../utils/commaNumber';
import convertDateYear from '../../utils/convertDateYear';
import { PageImageGet } from '../../orval/model';

export default function PostCard({ list }: { list: PageImageGet }) {
  const { id, imageUrl, dday, title, fundraiserName, percent, fundraiserId } = list;
  const router = useRouter();
  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;

  const { data: getUserMonthlyAmounts } = useGetBoard(id ?? 0, { query: { enabled: !!Number(id) } });
  const montlyAmount = getUserMonthlyAmounts?.response;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const showAnswer = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <ContainerWrapper onClick={() => router.push(`/fundraising/${id}`)}>
        <Container>
          <ContentWrapper>
            <RealContent>
              <ImgBox>
                <CardImg imgUrl={imageUrl ?? ''} />
              </ImgBox>
              <Content>
                <DdayBox>
                  <span>D-{dday}</span>
                  {userInfo?.id === fundraiserId && (
                    <p
                      onClick={e => {
                        e.stopPropagation();
                        showAnswer();
                      }}
                    >
                      모금내역확인
                    </p>
                  )}
                </DdayBox>
                <Title>{title ?? ''.length < 34 ? title : title ?? ''.slice(0, 35) + '...'}</Title>
                <Organization>{fundraiserName}</Organization>
                <ProgressBar percent={percent ?? 0} />
              </Content>
            </RealContent>
          </ContentWrapper>
        </Container>
      </ContainerWrapper>

      {modalIsOpen && (
        <Modal
          isOpen={true}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.45)',
              zIndex: 10,
            },
            content: {
              display: 'flex',
              justifyContent: 'center',
              background: 'white',
              overflow: 'auto',
              width: '297px',
              height: '191px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '1px',
              outline: 'none',
              border: 'none',
              zIndex: 10,
            },
          }}
        >
          <CheckContainer>
            <h3>모금내역확인</h3>
            <p>
              {convertDateYear(String(montlyAmount?.createdAt))} ~ {convertDateYear(String(montlyAmount?.endAt))}
              <Line />
              <span>총 {commaNumber(Number(montlyAmount?.totalAmount))}원</span>
            </p>
          </CheckContainer>
        </Modal>
      )}
    </>
  );
}

const ContainerWrapper = styled.div`
  border-top: 0;
  margin-top: 10px;
  opacity: 0.8;

  &:hover {
    transform: translateY(-4px);
    transition: 0.3s ease-in-out all;
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 400px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 20px;
  padding-left: 30px;
`;

const ContentWrapper = styled.div`
  height: 360.78px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 13px 16px -9px rgba(10, 22, 70, 0.1), 0 0 5px rgba(10, 22, 70, 0.06);
  background-color: #fff;
  overflow: hidden;
`;

const RealContent = styled.div`
  display: block;
`;

const Content = styled.div`
  padding: 5px 16px 16px;
`;

const ImgBox = styled.div`
  position: relative;
  height: 60%;
`;

const DdayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.gray900};
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.072px;
  margin-top: 6px;

  p {
    font-size: 12px;
    color: ${colors.gray600};
    font-weight: 340;
    cursor: pointer;
    z-index: 100;
  }
`;

const Title = styled.h1`
  margin-top: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: -0.072px;
`;

const Organization = styled.div`
  margin-top: 6px;
  color: ${colors.gray600};
  font-size: 13px;
  font-weight: 300;
  line-height: 120%;
  letter-spacing: -0.052px;
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  h3 {
    margin-bottom: 7px;
    letter-spacing: -0.07px;
    font-size: 15px;
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

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #c4c4c4;
  margin-top: 10px;
  margin-bottom: 10px;
`;
