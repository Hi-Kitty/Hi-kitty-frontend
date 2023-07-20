import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

interface BarProps {
  percent: number;
  marginBottom?: string;
  fontSize?: string;
}

export default function ProgressBar({ percent, marginBottom, fontSize }: BarProps) {
  return (
    <PercentBox>
      <PercentContent>
        <Progressbar value={percent} max="100" />
        <PercentName marginBottom={marginBottom} fontSize={fontSize}>
          {percent}%
        </PercentName>
      </PercentContent>
    </PercentBox>
  );
}

const PercentBox = styled.div`
  display: flex;
  font-size: 16px;
  flex-direction: column-reverse;
  align-items: flex-end;
  margin-top: -10px;
`;

const PercentContent = styled.div`
  width: 100%;
  display: contents;
`;

const Progressbar = styled.progress`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  appearance: none;
  background-color: ${colors.gray300};
  color: ${colors.gray300};
  border: none;
  outline: none;

  &::-webkit-progress-bar {
    background-color: ${colors.gray300};
    border-radius: 5px;
  }

  &::-webkit-progress-value {
    background-color: ${colors.pink500};
    border-radius: 5px;
  }
`;

const PercentName = styled.span<{ marginBottom?: string; fontSize?: string }>`
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
  font-size: ${({ fontSize }) => fontSize ?? '0'};
  color: ${colors.gray800};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.056px;
`;
