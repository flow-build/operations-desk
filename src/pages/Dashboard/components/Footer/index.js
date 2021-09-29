// @flow
import React, { HTMLAttributes } from 'react';

import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const Footer: React.FC<Props> = ({ gridArea, children, ...props }) => {
  return (
    <S.Container gridArea={gridArea} {...props}>
      {children}
    </S.Container>
  );
};
