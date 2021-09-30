import React from 'react';
import { Content, Footer, Header, SideList } from './components';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Container>
      <Header gridArea="HE"></Header>
      <SideList gridArea="SL"></SideList>
      <Content gridArea="CT"></Content>
      <Footer gridArea="FT">
        Versão 0.0.1 - Processo em foco: 9a038a0d0a90-d8adasd9ads9 - Número de
        atividades: 4
      </Footer>
    </S.Container>
  );
};
