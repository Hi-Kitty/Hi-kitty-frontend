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
import { useRequest } from '../../../orval/api/결제-시스템-api/결제-시스템-api';
import { onlyNumber } from '../../../utils/onlyNumber';
import { useGetByEmail } from '../../../api/인증-인가-기부자-모금자-공통-api/인증-인가-기부자-모금자-공통-api';
import { useGetBoard1 } from '../../../orval/api/게시판-조회-api/게시판-조회-api';
import { HeartResponse } from '../../../orval/model/heartResponse';
import { PlanResponse } from '../../../orval/model/planResponse';
import ModalComp from '../../../components/ModalComp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DonateModal from '../Detail/DonateModal';

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

  const { data, isLoading, isError } = useGetBoard1(boardId);

  const getUserInfoStatus = useGetByEmail();
  const userInfo = getUserInfoStatus.data?.response;

  const [form, setForm] = useState(initialForm);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showAnswer = (e: React.MouseEvent) => {
    if (!!userInfo) {
      setModalIsOpen(!modalIsOpen);
    } else {
      e.preventDefault();
      toast.error('로그인이 필요합니다.');
    }
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

  const originUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;

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

  useEffect(() => {
    if (isError) {
      window.alert('서버에 오류가 발생했습니다.');
      router.back();
    }
  }, [isError, router]);

  if (isLoading) {
    return <Loading />;
  }

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
                  data?.heartResponses?.map((list: HeartResponse) => (
                    <Heart
                      key={list.donerId}
                      donerProfileUrl={list.donerProfileUrl ?? ''}
                      donerName={list.donerName ?? ''}
                    />
                  ))
                ) : (
                  <p style={{ fontSize: '15px' }}>하트가 없어요.</p>
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
                showAnswer(e);
              }}
            />
          </ButtonBox>
        </>
      ) : (
        <Loading />
      )}
      {modalIsOpen && (
        <ModalComp isOpen={true} onRequestClose={() => setModalIsOpen(false)} height="730px">
          <DonateModal
            onSubmit={handleSubmit}
            onChange={handleChange}
            amount={form.amount}
            boardImg={data?.imageUrl ?? ''}
            boardTitle={data?.title ?? ''}
            boardTeam={data?.fundraiserName ?? ''}
            memberName={userInfo?.name ?? ''}
          />
        </ModalComp>
      )}
      <ToastContainer />
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
