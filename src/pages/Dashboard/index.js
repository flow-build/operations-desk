import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  getAvailableActivityManagersAsync,
  getAvailableWorkflowsAsync,
} from '@flowbuild/redux-toolkit-workflow-manager/workflowManager.slice';

/* Components */
import { Content, Footer, Header, SideList } from './components';
import { Loading as LoadingGIF } from '../../shared';

/* Data */
import { DASHBOARD_FAKE } from '../../data';

import * as S from './styles';

export const Dashboard = () => {
  const dispatch = useDispatch();
  // Params da página
  const { state } = useLocation();
  console.log({ state });

  // console.log('state')
  const { headers, activityId } = state;

  useEffect(() => {
    const request = async () => {
      await dispatch(getAvailableWorkflowsAsync());
      await dispatch(getAvailableActivityManagersAsync());
    };

    request();
  }, []);

  useEffect(() => {
    localStorage.setItem('@reports', JSON.stringify(state?.reports));
  }, [state]);

  // const { headerItems } = DASHBOARD_FAKE;

  return (
    <S.Container>
      <Header gridArea="HE" items={headers} />
      <SideList gridArea="SL" />
      <Content gridArea="CT" />
      <Footer gridArea="FT" />

      {/* <LoadingGIF /> */}
    </S.Container>
  );
};
