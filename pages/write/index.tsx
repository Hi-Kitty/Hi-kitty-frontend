//
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { colors } from '../../styles/colors';
import { ChangeEvent, FormEvent, useMemo, useRef, useState } from 'react';
import BottomButton from '../../components/BottomButton';
import Input from '../../components/Input';
import { onlyNumber } from '../../utils/onlyNumber';
import commaNumber from '../../utils/commaNumber';
import { useCreate1 } from '../../api/모금자용-권한용-api/모금자용-권한용-api';

const initialForm = {
  title: '',
  subTitle: '',
  contents: '',
  date: '',
  num: '0',
  amountNum: '0',
  plan: '',
};

export default function Write() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [showImages, setShowImages] = useState<string[]>([]);
  const [imageFile, setImageFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'num' || name === 'amountNum') {
      const processedValue = onlyNumber(value); // 숫자와 콤마만 남기는 처리
      const numericValue = Number(processedValue.replace(/,/g, '')); // 콤마 제거 후 숫자로 변환
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

  const handleChangeArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const isSameAmount = useMemo(() => {
    const { title, subTitle, contents, date, num, amountNum, plan } = form;

    if (!title || !subTitle || !contents || !date || num === '' || amountNum === '' || !plan) {
      return false;
    }

    if (Number(num) !== Number(amountNum)) {
      return false;
    }

    return true;
  }, [form]);

  let imageUrlLists: string[] = [...showImages];

  const handleAddImages = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const imageLists = event.target.files;

    if (!imageLists) return;
    imageUrlLists.push(URL.createObjectURL(imageLists[0]));
    setShowImages(imageUrlLists);

    if (file) setImageFile(file);
  };

  const handleDeleteImage = (index: number) => {
    imageUrlLists.splice(index, 1);
    setShowImages([...imageUrlLists]);

    const file = document.getElementById('file') as HTMLInputElement;
    file.value = '';
  };

  const boardCreateMutate = useCreate1();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    boardCreateMutate.mutate({
      data: {
        boardCreateRequest: {
          content: form.contents,
          endAt: form.date,
          targetAmount: Number(form.num),
          title: form.title,
          subTitle: form.subTitle,
        },
        img: imageFile as File,
        planCreatesRequest: [
          {
            reason: form.plan,
            amount: Number(form.amountNum),
          },
        ],
      },
    });
    window.alert('글이 작성되었습니다.');
    router.push('/fundraising');
  };

  const handleDefaultImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
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
      <Article>
        <BackgroundImg
          ref={inputRef}
          type="file"
          id="file"
          accept="image/jpg, image/jpeg, image/png"
          style={{ display: 'none' }}
          onChange={handleAddImages}
        />
        <BackgroundImgReal
          src="images/Camera.svg"
          width={420}
          height={300}
          alt="cat-hungry"
          onClick={handleDefaultImage}
        />
        {/* <BackgroundImg style={{ backgroundImage: `url('images/Cat-hungry.svg')` }}> */}
        {showImages.map((image, id) => (
          <UpImg key={id}>
            <img src={image} alt={`${image}-${id}`} />
            <span onClick={() => handleDeleteImage(id)}>X</span>
          </UpImg>
        ))}
        <TitleNameBox>
          <Input
            type={'text'}
            value={form.title}
            name="title"
            onChange={handleChange}
            width="60%"
            height="13%"
            placeholder="모금글 제목을 입력해주세요."
            color="white"
          />
        </TitleNameBox>
      </Article>
      <DateAmountContainer>
        <DateAmountContent>
          <DateAmount>
            <ContentMain>
              <p>목표금액</p>
            </ContentMain>
            <Input
              name="num"
              onChange={handleChange}
              type={'text'}
              value={commaNumber(Number(form.num))}
              placeholder="목표금액을 입력해주세요."
            />
          </DateAmount>
          <DateAmount>
            <ContentMain>
              <p>마감날짜</p>
            </ContentMain>
            <Input
              type={'date'}
              placeholder="목표금액을 입력해주세요."
              onChange={handleChange}
              name="date"
              value={form.date}
            />
          </DateAmount>
        </DateAmountContent>
      </DateAmountContainer>
      <MainTextContainer>
        <MainText>
          <Input
            type={'text'}
            value={form.subTitle}
            name="subTitle"
            onChange={handleChange}
            width="95%"
            height="20%"
            placeholder="부제목을 입력해주세요."
          />
          <textarea
            name="contents"
            placeholder="수정 및 삭제가 불가능하니 신중하게 작성해주세요. (30자 이상)"
            onChange={handleChangeArea}
            maxLength={3000}
            value={form.contents}
          />
        </MainText>
      </MainTextContainer>
      <PlanContainer>
        <h3>모금액 사용계획은 이렇습니다.</h3>
        <Input type={'text'} width="60%" placeholder="사용계획" value={form.plan} onChange={handleChange} name="plan" />
        <Input
          type={'text'}
          width="30%"
          placeholder="모금액"
          value={commaNumber(Number(form.amountNum))}
          onChange={handleChange}
          name="amountNum"
        />
        <span>원</span>
      </PlanContainer>

      <ButtonBox>
        <BottomButton title={'작성하기'} width="100%" height="68px" opacity={0.95} disabled={!isSameAmount} />
      </ButtonBox>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  padding-bottom: 130px;
`;

const TopContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 14px 24px;
  background: #ffffff;
  box-sizing: border-box;
  width: 420px;
  z-index: 10;
  opacity: 0.3;
`;

const Article = styled.div`
  height: 280px;
  margin-bottom: 25px;
  position: relative;
  width: 100%;
  display: block;
`;

const BackgroundImg = styled.input`
  background-size: cover;
  background-position: center;
  display: table;
  width: 100%;
  background-color: #666;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  table-layout: fixed;
`;

const BackgroundImgReal = styled(Image)`
  background-size: cover;
  background-color: #666;
  background-position: center;
  display: table;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  table-layout: fixed;
`;

const UpImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

  ::before {
    content: '';
    position: absolute;
    background-color: rgba(30, 29, 41, 0.32);
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  span {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 140%;
    padding-left: 4.5px;
    background-color: rgba(30, 29, 41, 0.32);
    border-radius: 50%;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    outline: none;
    z-index: 20;
  }
`;

const TitleNameBox = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  top: 45%;
  left: 25%;
  text-align: center;
  z-index: 50;

  input {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
    margin: auto;
    text-align: center;
  }

  span {
    width: auto;
    font-size: 14px;
    opacity: 0.8;
    max-height: 55px;
    color: ${colors.white};
  }
`;

const DateAmountContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid ${colors.gray300};
`;

const DateAmountContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const DateAmount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  p {
    font-size: 16px;
    font-weight: 500;
    margin: auto;
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    width: 70%;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    margin: auto;
    height: 30px;
    text-align: center;
  }

  // 인풋에 입력할때 오른쪽에서부터 입력되게
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 10px 5px 10px;
`;

const PlanContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-bottom-color: 1px solid ${colors.gray300};
  padding: 30px 20px 5px 20px;

  h3 {
    letter-spacing: -0.07px;
    font-size: 18px;
    font-weight: 500;
    line-height: 2;
  }

  input {
    display: inline-block;
    margin-right: 3%;
  }

  span {
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    margin: auto;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
`;

const MainTextContainer = styled.div`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 80px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.gray300};
`;

const MainText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #232323;
  text-align: left;
  line-height: 1.875;
  word-break: break-all;
  margin-top: -30px;

  input {
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
  }

  textarea {
    font-weight: 400;
    line-height: 2.5;
    letter-spacing: -0.3px;
    display: block;
    margin-block-start: 30px;
    margin-block-end: 30px;
    background-color: inherit;
    height: 600px;

    border: none;
    width: 100%;
    font-size: 16px;
    line-height: 190%;
    resize: none;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #959599;
    }
  }
`;
