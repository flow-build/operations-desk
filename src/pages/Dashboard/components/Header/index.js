// @flow
import React, { HTMLAttributes } from 'react';

import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const Header: React.FC<Props> = ({ gridArea }) => {
  return (
    <S.Container gridArea={gridArea}>
      <S.Menu>
        <S.MenuItems>Home</S.MenuItems>
        <S.MenuItems>Sobre</S.MenuItems>
        <S.MenuItems>Relatórios</S.MenuItems>
      </S.Menu>
      <S.Logout />
    </S.Container>
  );
};
