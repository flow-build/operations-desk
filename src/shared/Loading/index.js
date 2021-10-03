import React from 'react';
import loadingGif from '../../assets/images/loading.gif';

import * as S from './styles';

export const Loading = React.memo(() => {
  return (
    <S.Container>
      <img src={loadingGif} alt="Loading" />
    </S.Container>
  );
});
