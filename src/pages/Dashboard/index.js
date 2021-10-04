import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Components */
import { Content, Footer, Header, SideList } from './components';
import { Loading as LoadingGIF } from '../../shared';

/* Data */
import { DASHBOARD_FAKE } from '../../data';

import * as S from './styles';

export const Dashboard = () => {
  // Params da página
  const { state } = useLocation();
  console.log({ state });

  useEffect(() => {
    localStorage.setItem('@reports', JSON.stringify(state?.reports));
  }, [state]);

  const { headerItems } = DASHBOARD_FAKE;

  return (
    <S.Container>
      <Header gridArea="HE" items={headerItems} />
      <SideList gridArea="SL" />
      <Content gridArea="CT" />
      <Footer gridArea="FT">
        Versão 0.0.1 - Processo em foco: 9a038a0d0a90-d8adasd9ads9 - Número de
        atividades: 4
      </Footer>

      {/* <LoadingGIF /> */}
    </S.Container>
  );
};
