import styled from '@emotion/styled';
import Image from 'next/image';

export default function DonorListNone() {
  return (
    <Container>
      <ContentBox>
        <CatFeed>
          <Image src="/images/Cat-hungry.svg" width={218} height={142} alt="후원내역이 없어요" />
        </CatFeed>
        <DonationMsg>후원내역이 없어요!{'\n'} 키치한 동행에 함께해주세요~</DonationMsg>
      </ContentBox>
    </Container>
  );
}

const Container = styled.div``;

const ContentBox = styled.div`
  height: 200px;
`;

const CatFeed = styled.div`
  display: flex;
  justify-content: center;
`;

const DonationMsg = styled.div`
  padding: 13px 0 100px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #29292e;
  white-space: pre-wrap;
  letter-spacing: -0.072px;
`;
