// @flow
import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ title, ...props }) => {
    return <S.Container {...props}>{title}</S.Container>;
  }
);
