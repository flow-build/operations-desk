// @flow
import React, { HTMLAttributes } from 'react';

import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const Header: React.FC<Props> = ({ gridArea }) => {
  return (
    <S.Container gridArea={gridArea}>
      Header
      <S.Logout />
    </S.Container>
  );
};
