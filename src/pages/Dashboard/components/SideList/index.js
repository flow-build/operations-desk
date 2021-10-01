// @flow
import React, { HTMLAttributes } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import * as S from './styles';
import { Card } from '../../../../shared';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const SideList: React.FC<Props> = ({ gridArea, ...props }) => {
  const { currentScreen } = useSelector(
    (state) => state.pageNavigation,
    shallowEqual
  );

  const items = getItems(currentScreen);

  function getItems(screen: string): Array<any> {
    if (screen === 'Relatórios') {
      const reports = JSON.parse(localStorage.getItem('@reports'));
      return reports.map((r) => ({
        title: r.title,
        description: r.description,
      }));
    }

    return [];
  }

  return (
    <S.Container gridArea={gridArea}>
      {items.map((i) => (
        <Card title={i.title} description={i.description} />
      ))}
    </S.Container>
  );
};
