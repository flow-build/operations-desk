// @flow
import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...props} />
    </S.Container>
  );
};
