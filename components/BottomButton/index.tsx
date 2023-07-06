import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export interface ButtonProps {
  title?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  marginTop?: string;
  marginBottom?: string;
  hoverFontColor?: string;
  position?: string;
  disabled?: boolean;
  borderRadius?: string;
  opacity?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BottomButton({
  title,
  width,
  height,
  backgroundColor,
  marginTop,
  marginBottom,
  hoverFontColor,
  position,
  disabled = false,
  onClick,
  onChange,
  borderRadius,
  opacity,
}: ButtonProps) {
  return (
    <Button
      title={title}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
      hoverFontColor={hoverFontColor}
      position={position}
      disabled={disabled}
      onClick={onClick}
      borderRadius={borderRadius}
      opacity={opacity}
    >
      {title}
    </Button>
  );
}

const Button = styled.button<ButtonProps>`
  margin: 0 auto;
  width: ${({ width }) => width ?? '34rem'};
  height: ${({ height }) => height ?? '4rem'};
  background-color: ${({ disabled }): string => (disabled ? colors.gray100 : colors.pink500)};
  border: none;
  border-radius: 0px;
  color: ${({ disabled }): string => (disabled ? colors.white : colors.white)};

  font-size: 18px;
  margin-top: ${({ marginTop }) => marginTop ?? '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
  position: ${({ position }) => position ?? 'static'};
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0px'};
  opacity: ${({ opacity }) => opacity ?? 0.85};

  :hover {
    opacity: 1;
    transition: 0.3s ease-in-out all;
    color: ${({ hoverFontColor }) => hoverFontColor ?? '${colors.white}'};
  }
`;
