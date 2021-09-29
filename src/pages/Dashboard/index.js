import React from 'react';
import { Content, Footer, Header, SideList } from './components';

import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Container>
      <Header gridArea="HE"></Header>
      <SideList gridArea="SL"></SideList>
      <Content gridArea="CT"></Content>
      <Footer gridArea="FT">Footer</Footer>
    </S.Container>
  );
};
