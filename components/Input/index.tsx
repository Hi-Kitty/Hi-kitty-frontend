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
  padding-left: 0.2rem;
  width: ${({ width }) => width ?? '34rem'};
  height: ${({ height }) => height ?? '4rem'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
  border: none;
  border-bottom: 0.1rem solid #dcdce0;
  font-size: 16px;
  background-color: transparent;

  ::placeholder {
    color: #dcdce0;
    letter-spacing: -0.02rem;
  }

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid #000000;
  }
`;
