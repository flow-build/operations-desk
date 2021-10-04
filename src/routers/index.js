// @flow
import React, { useEffect } from 'react';
import { useWorkflowManager } from '@flowbuild/redux-toolkit-workflow-manager/useWorkflowManager';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
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
  const { currentActivity, login } = useWorkflowManager();

  useEffect(() => {
    handleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentActivity) {
      console.log('currentActivity', currentActivity);
      handleNavigation(currentActivity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentActivity]);

  async function handleLogin() {
    try {
      const body = { claims: ['anonymous'] };
      await login('http://3.82.154.55:3000/token', body);
    } catch (error) {
      const message = 'Erro ao tentar fazer login anônimo.';
      console.error(message, error);
    }
  }

  async function handleNavigation(activity: Activity): void {
    const {
      props: { action, result },
    } = activity;

    const router = ACTION_TO_ROUTER[action];

    if (router) {
      history.push(router, result);
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
