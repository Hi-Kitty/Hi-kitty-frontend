import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import Image from 'next/image';

export default function Footer() {
  return (
    <FooterBoxWrpper>
      <FooterWrapper>
        <FooterLogo href="/">
          <Image src="/images/Hikitty-white.svg" width={110} height={28} alt="white_logo" />
        </FooterLogo>
        <FooterIcon>
          <Image src="/images/Kakaotalk.svg" width={33} height={25} alt="kakaotalk_logo" style={{ marginBottom: 3 }} />
          <Image src="/images/Instagram.svg" width={33} height={33} alt="instagram_logo" />
        </FooterIcon>
        <FooterService>
          <a>공식노션보기</a> | <a>도움말</a> | <a>이용약관</a>
          <Copyright>©Copyright. 2023 HI KITTY all rights reserved.</Copyright>
        </FooterService>
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
`;

const FooterService = styled.div`
  margin-top: 15px;
  font-size: 11px;
  color: ${colors.gray400};

  a {
    text-decoration: none;
    letter-spacing: -0.2px;
  }
`;

const Copyright = styled.div`
  margin-top: 10px;
  font-size: 9px;
`;
