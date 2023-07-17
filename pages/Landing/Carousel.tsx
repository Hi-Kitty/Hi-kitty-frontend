import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';

interface Props {
  banners: JSX.Element[];
}

export default function Carousel({ banners }: Props) {
  const sliderSettings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <StyledSlider {...sliderSettings}>
        {banners?.map((banner, index) => (
          <div key={index}>{banner}</div>
        ))}
      </StyledSlider>
    </>
  );
}

const StyledSlider = styled(Slider)`
  height: 170px;
  overflow: hidden;
  width: 410px;
  margin-left: -10px;
  .slick-slide div {
    outline: none;
  }
`;
