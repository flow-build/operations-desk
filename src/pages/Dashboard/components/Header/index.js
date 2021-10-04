// @flow
import React, { HTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';

import {
  setCurrentFilter,
  setCurrentScreen,
} from '../../../../redux/pageNavigation.slice';

import * as S from './styles';

interface HeaderItem {
  aba: string;
  label: string;
  wfFilter: any[];
}

interface Props extends HTMLAttributes<HTMLElement> {
  items: HeaderItem[];
  gridArea: string;
}

export const Header: React.FC<Props> = React.memo(({ items, gridArea }) => {
  const dispatch = useDispatch();

  async function handleClick(page: string) {
    try {
      await dispatch(setCurrentFilter({ items, aba: page }));
      await dispatch(setCurrentScreen(page));
    } catch (error) {
      const message = 'Erro ao tentar mudar a tela exibida.';
      console.error(message, error);
    }
  }

  return (
    <S.Container gridArea={gridArea}>
      <S.Menu>
        {items.map((item, index) => (
          <S.MenuItems
            key={index.toString()}
            onClick={() => handleClick(item.aba)}
          >
            {item.label}
          </S.MenuItems>
        ))}
      </S.Menu>
      <S.Logout />
    </S.Container>
  );
});
