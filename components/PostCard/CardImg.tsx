import styled from '@emotion/styled';

interface ImgProps {
  imgUrl: string;
  height?: string;
}

export default function CardImg({ imgUrl }: ImgProps) {
  return (
    <CardBox borderRadius={'20px'}>
      <img src={imgUrl} alt="img" />
    </CardBox>
  );
}

const CardBox = styled.div<{ borderRadius: string; height?: string }>`
  width: 100%;
  height: 230px;
  position: static;
  border-radius: 8px 8px 0 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: ${({ borderRadius }) => borderRadius};
    object-fit: cover;
  }
`;
