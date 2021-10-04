import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */
import { Form } from './components';

/* Data */
import { LOGIN_FAKE } from '../../data';

/* Styles */
import * as S from './styles';

export const SignIn = () => {
  const history = useHistory();

  const { subtitle, title } = LOGIN_FAKE;

  function onSubmit(username, password) {
    // alert(username);
    history.push('/dashboard');
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
