// @flow
import React, { HTMLAttributes } from 'react';

import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const SideList: React.FC<Props> = ({ gridArea, ...props }) => {
  return <S.Container gridArea={gridArea}>SideList</S.Container>;
};
