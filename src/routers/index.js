// @flow
import React, { useEffect } from 'react';
import { useWorkflowManager } from '@flowbuild/redux-toolkit-workflow-manager/useWorkflowManager';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { Dashboard, Loading, SignIn } from '../pages';

import { ACTION_TO_ROUTER } from '../config';

interface Activity {
  activities: Array<any>;
  bag: Object;
  created_at: string;
  id: string;
  process_id: string;
  process_state_id: string;
  props: { action: string, result: Object };
  status: string;
  type: string;
  workflow_id: string;
  workflow_name: string;
}

const NestedRoutes = () => {
  const history = useHistory();
  const { currentActivity, login, setNavigation, submitActivity, setLogin } =
    useWorkflowManager();
  const { token } = useSelector((state) => state.login);
  // console.log('login', loginTeste);

  useEffect(() => {
    handleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('currentActivity', currentActivity);

  useEffect(() => {
    // if (token) {
    console.log('token', token);
    setNavigation('appAccess', handleNavigation);
    // }
    // if (currentActivity) {
    //   console.log('currentActivity', currentActivity);
    //   handleNavigation(currentActivity);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentActivity]);

  async function handleLogin() {
    try {
      const body = {};
      await login('http://54.173.95.157:3000/token', body);
    } catch (error) {
      const message = 'Erro ao tentar fazer login anônimo.';
      console.error(message, error);
    }
  }

  async function handleNavigation(/* activity: Activity */): void {
    // console.log('activity', activity);
    const {
      props: { action, result },
    } = currentActivity;

    const router = ACTION_TO_ROUTER[action];

    if (router) {
      history.push(router, { ...result, activityId: currentActivity.id });
    } else if (action === 'DELIVER_TOKEN') {
      const payload = { ack: true };
      await submitActivity(currentActivity.id, payload);

      const { claims, token } = result;
      const { actor_id, session_id } = jwt_decode(token);

      localStorage.setItem('@actor_id', actor_id);
      localStorage.setItem('@session_id', session_id);
      localStorage.setItem('TOKEN', token);

      setLogin({
        actor_id,
        claims,
        token,
        // refresh_token: result.login.refresh_token,
        // account_id: result.login.account_id,
        session_id,
      });

      // await AsyncStorage.setItem('TOKEN', result.login.token);
    }
  }

  return (
    <Switch>
      <Route path="/" exact component={Loading} />
      <Route path="/login" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export const Routes = () => {
  return (
    <BrowserRouter>
      <NestedRoutes />
    </BrowserRouter>
  );
};
