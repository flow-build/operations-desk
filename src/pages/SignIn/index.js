import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useWorkflowManager } from '@flowbuild/redux-toolkit-workflow-manager/useWorkflowManager';

/* Components */
import { Form } from './components';

/* Data */
import { LOGIN_FAKE } from '../../data';

/* Styles */
import * as S from './styles';

export const SignIn = () => {
  const history = useHistory();
  const { state } = useLocation();

  const { activityId } = state;

  const { submitActivity } = useWorkflowManager();

  const { subtitle, title } = LOGIN_FAKE;

  function onSubmit(username, password) {
    const payload = {
      username,
      password,
    };
    console.log('payload', payload);
    submitActivity(activityId, payload);
    // alert(username);
    // history.push('/dashboard');
  }

  return (
    <S.Container>
      <S.LoginContainer>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Text>{subtitle}</S.Text>
        </S.Info>

        <Form onSubmit={onSubmit} />
      </S.LoginContainer>
    </S.Container>
  );
};
