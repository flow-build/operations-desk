// @flow
import React, { HTMLAttributes } from 'react';

import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const Content: React.FC<Props> = ({ gridArea, ...props }) => {
  return (
    <S.Container gridArea={gridArea}>
      <S.Pane></S.Pane>
    </S.Container>
  );
};
