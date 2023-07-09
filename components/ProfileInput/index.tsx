import styled from '@emotion/styled';
import React, { HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  marginBottom?: string;
  defaultValue?: string;
  id?: string;
}

export default function Input({ type, placeholder, value, onChange, ...props }: InputProps) {
  return <StyleInput type={type} placeholder={placeholder} value={value} onChange={onChange} {...props} />;
}

const StyleInput = styled.input<InputProps>`
  width: ${({ width }) => width ?? '24rem'};
  height: ${({ height }) => height ?? '2rem'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
  border: none;
  border-bottom: 0.1rem solid #dcdce0;
  font-size: 14px;
  background-color: transparent;

  display: inline;

  ::placeholder {
    color: #dcdce0;
    letter-spacing: -0.02rem;
  }

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid #000000;
  }
`;
