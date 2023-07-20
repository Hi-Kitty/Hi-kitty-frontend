import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';

export default function Body({ subTitle, content = '' }: { content: string; subTitle: string }) {
  return (
    <MainTextContainer>
      <MainText>
        {content?.split('\n').map((text, i, sub) => (
          <>
            {i === 0 && (
              <strong>
                {subTitle}
                <br />
              </strong>
            )}
            <p>
              {text}
              <br />
            </p>
          </>
        ))}
      </MainText>
    </MainTextContainer>
  );
}

const MainTextContainer = styled.div`
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 40px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.gray300};
`;

const MainText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #232323;
  text-align: left;
  line-height: 1.875;
  word-break: break-all;

  strong {
    font-size: 20px;
    font-weight: 600;
    line-height: 140%;
  }

  p {
    font-weight: 400;
    line-height: 2.5;
    letter-spacing: -0.3px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 10em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
