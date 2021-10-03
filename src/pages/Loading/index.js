import React from 'react';

import { Loading as LoadingGIF } from '../../shared';

import * as S from './styles';

export const Loading = () => {
  return (
    <S.Container>
      <LoadingGIF />
    </S.Container>
  );
};
