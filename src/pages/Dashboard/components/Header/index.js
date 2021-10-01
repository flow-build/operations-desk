// @flow
import React, { HTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentScreen } from '../../../../redux/pageNavigation.slice';

import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const Header: React.FC<Props> = React.memo(({ gridArea }) => {
  const dispatch = useDispatch();

  function handleClick(page: string) {
    try {
      dispatch(setCurrentScreen(page));
    } catch (error) {
      const message = 'Erro ao tentar mudar a tela exibida.';
      console.error(message, error);
    }
  }

  return (
    <S.Container gridArea={gridArea}>
      <S.Menu>
        <S.MenuItems onClick={() => handleClick('Home')}>Home</S.MenuItems>
        <S.MenuItems onClick={() => handleClick('Sobre')}>Sobre</S.MenuItems>
        <S.MenuItems onClick={() => handleClick('Relatórios')}>
          Relatórios
        </S.MenuItems>
      </S.Menu>
      <S.Logout />
    </S.Container>
  );
});
