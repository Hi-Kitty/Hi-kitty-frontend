import styled from '@emotion/styled';
import Loading from '../../../components/Loading';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { colors } from '../../../styles/colors';
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import Body from '../Detail/Body';
import Plan from '../Detail/Plan';
import BottomButton from '../../../components/BottomButton';
import Heart from '../Detail/Heart';
import Team from '../Detail/Team';
import Head from '../Detail/Head';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import Input from '../../../components/Input';
import commaNumber from '../../../utils/commaNumber';
import { useRequest } from '../../../orval/api/결제-시스템-api/결제-시스템-api';
import { onlyNumber } from '../../../utils/onlyNumber';
import { useGetByEmail } from '../../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import DetailBox from '../../../components/DetailBox';
import { useGetBoard1 } from '../../../orval/api/게시판-조회-api/게시판-조회-api';
import { HeartResponse } from '../../../orval/model/heartResponse';
import { PlanResponse } from '../../../orval/model/planResponse';
import ModalComp from '../../../components/ModalComp';
import { toast } from 'react-toastify';

const initialForm = {
  amount: '0',
  boardId: '0',
  payType: 'CARD',
};

export default function Detail() {
  const router = useRouter();
  const boardId = useMemo(() => {
    if (!router.query.id) return 0;
    return Number(router.query.id);
  }, [router.query.id]);
  console.log('isdfasfdasd', boardId);

  const { data, isLoading, isError } = useGetBoard1(boardId);
  const [mode, setMode] = useState<'닉네임' | '괜찮아요'>('닉네임');

  console.log('mode', mode);
  console.log('setMode', setMode);

  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;

  const [form, setForm] = useState(initialForm);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const showAnswer = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const payMentsCreateMutate = useRequest({
    mutation: {
      onSuccess: payData => {
        loadTossPayments(String(clientKey)).then(tossPayments => {
          tossPayments
            .requestPayment('CARD', {
              amount: Number(form.amount),
              orderId: String(payData?.response?.orderId),
              orderName: String(data?.title),
              customerName: String(payData.response?.customerName),
              successUrl: `${originUrl}/payments/success`,
              failUrl: `${originUrl}/payments/fail`,
            })
            .catch(function (error) {
              if (error.code === 'USER_CANCEL') {
                toast.error('결제를 취소하셨습니다.');
              } else if (error.code === 'INVALID_CARD_COMPANY') {
                toast.error('지원하지 않는 카드 입니다.');
              }
            });
        });
      },
      onError: err => {
        console.log(err);
        window.alert('에러 발생');
      },
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    payMentsCreateMutate.mutate({
      data: {
        amount: Number(form.amount),
        boardId: Number(boardId),
        payType: 'CARD',
      },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (form.amount) {
      const processedValue = onlyNumber(value);
      const numericValue = Number(processedValue.replace(/,/g, ''));
      if (!isNaN(numericValue)) {
        setForm({
          ...form,
          [name]: numericValue,
        });
      }
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isError) {
      window.alert('서버에 오류가 발생했습니다.');
      router.back();
    }
  }, [isError, router]);

  if (isLoading) {
    return <Loading />;
  }

  const originUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;

  return (
    <Container>
      <TopContainer>
        <Image
          src="/images/ArrowBack.svg"
          width={30}
          height={24}
          alt="log"
          style={{ paddingTop: 5, cursor: 'pointer' }}
          onClick={() => router.back()}
        />
      </TopContainer>
      {data ? (
        <>
          <Head
            title={data?.title ?? ''}
            fundraiserName={data?.fundraiserName ?? ''}
            imageUrl={data?.imageUrl ?? ''}
            createAt={data?.createAt ?? ''}
            endAt={data?.endAt ?? ''}
            currentAmount={data?.currentAmount ?? 0}
            percent={data?.percent ?? 0}
            targetAmount={data?.targetAmount ?? 0}
          />
          <Line />
          <Body subTitle={data?.subTitle ?? ''} content={data?.content ?? ''} />
          <PlanContainer>
            <h3>모금 사용계획</h3>
            {data?.planResponse?.map((list: PlanResponse) => {
              return <Plan key={list.id} reason={list.reason ?? ''} amount={list.amount ?? 0} />;
            })}
          </PlanContainer>
          <TeamContainer>
            <Team
              imgUrl={data.profileUrl ?? '/images/Cat.svg'}
              fundraiserId={data?.fundraiserId ?? 0}
              fundraiserName={data?.fundraiserName ?? ''}
            />
          </TeamContainer>
          <HeartContainer>
            <h3>나눔 하트</h3>
            <HeartContent>
              <ul>
                {data?.heartResponses?.length ?? 0 > 0 ? (
                  data?.heartResponses?.map((list: HeartResponse) => {
                    console.log(list, 'gmx m');
                    return (
                      <Heart
                        key={list.donerId}
                        donerProfileUrl={list.donerProfileUrl ?? ''}
                        donerName={list.donerName ?? ''}
                      />
                    );
                  })
                ) : (
                  <>
                    <p style={{ fontSize: '15px' }}>하트가 없어요.</p>
                  </>
                )}
              </ul>
            </HeartContent>
          </HeartContainer>
          <ButtonBox>
            <BottomButton
              title={'후원하기'}
              width="100%"
              height="68px"
              opacity={0.95}
              onClick={e => {
                e.stopPropagation();
                showAnswer();
              }}
            />
          </ButtonBox>
        </>
      ) : (
        <Loading />
      )}
      {modalIsOpen && (
        <ModalComp isOpen={true} onRequestClose={() => setModalIsOpen(false)} height="730px">
          <CheckContainer onSubmit={handleSubmit} onClick={e => e.stopPropagation()}>
            <h3>기부하기</h3>
            <ContentBox>
              <ContentWrapper>
                <BoardImg src={data?.imageUrl} />
                <BoardTitle>{data?.title}</BoardTitle>
                <BoardTeam>{data?.fundraiserName}</BoardTeam>
              </ContentWrapper>
            </ContentBox>
            <PriceBox>
              <Input
                type={'text'}
                width="100%"
                value={commaNumber(Number(form.amount))}
                onChange={handleChange}
                name="amount"
              />
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
                  memberName={userInfo?.name ?? ''}
                  memberName2="괜찮아요"
                  onClick1={() => setMode('닉네임')}
                  onClick2={() => setMode('괜찮아요')}
                  margin="20px"
                />
              </ChoiceWrapper>
            </HeartBox>
            <BottomButton
              title={'결제하기'}
              width="100%"
              height="50px"
              opacity={0.95}
              marginTop="30px"
              borderRadius="5px"
            />
          </CheckContainer>
        </ModalComp>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding-bottom: 70px;
`;

const TopContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 14px 24px;
  background: #ffffff;
  box-sizing: border-box;
  width: 420px;
  z-index: 100;
  opacity: 0.3;
`;

const PlanContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
  border-top-color: 1px solid ${colors.gray300};
  padding: 30px 20px 5px 20px;

  h3 {
    letter-spacing: -0.07px;
    font-size: 18px;
    font-weight: 500;
    line-height: 2;
  }
`;
const TeamContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
  padding: 30px 20px 25px 20px;
`;

const HeartContainer = styled.div`
  display: inline-block;
  position: relative;
  padding: 40px 0 15px 20px;
  width: 100%;
  border-top: 1px solid ${colors.gray300};

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 7px;
  }
`;

const HeartContent = styled.div`
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  ul {
    line-height: 2;
    display: flex;
    width: 100%;
    list-style: none;
    font-size: 18px;
    color: ${colors.gray900};
    gap: 7px;
  }
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
`;

const Line = styled.div`
  border-top: 1px solid ${colors.gray300};
  width: 100%;
`;

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
