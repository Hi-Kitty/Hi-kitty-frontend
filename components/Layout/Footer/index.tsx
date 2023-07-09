import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { colors } from '../../../styles/colors';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();

  return (
    <FooterBoxWrpper>
      <FooterWrapper>
        <FooterLogo href="/">
          <Image src="../../../../images/HI_KITTY_white.svg" width={110} height={28} alt="white_logo" />
        </FooterLogo>
        <FooterIcon>
          <a href="#">
            <Image id="m" src="../../../../images/kakaotalk.svg" width={25} height={25} alt="kakaotalk_logo" />
          </a>
          <a href="#">
            <Image src="../../../../images/instagram.svg" width={33} height={33} alt="instagram_logo" />
          </a>
        </FooterIcon>
        <FooterService>
          <a href="#">공식노션보기</a> | <a href="#">도움말</a> | <a href="#">이용약관</a>
        </FooterService>
        <Copyright>©Copyright. 2023 HI KITTY all rights reserved.</Copyright>
      </FooterWrapper>
    </FooterBoxWrpper>
  );
}

const FooterBoxWrpper = styled.div`
  height: 189px;
  background-color: #29292e;
`;
const FooterWrapper = styled.div`
  margin: 0 17px 0 17px;
  padding-top: 58px;
`;

const FooterLogo = styled.a`
  display: inline;
  padding-right: 50%;
  margin-bottom: 3px;
`;
const FooterIcon = styled.div`
  display: inline;

  #m {
    margin: 0 3px 3px 0;
  }
`;

const FooterService = styled.div`
  margin-top: 15px;
  font-size: 11px;
  color: ${colors.white};

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const Copyright = styled.div`
  margin-top: 10px;
  font-size: 9px;
  color: ${colors.white};
`;
