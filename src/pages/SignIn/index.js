import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */
import { Form } from './components';

/* Styles */
import * as S from './styles';

export const SignIn = () => {
  const history = useHistory();

  function onSubmit(username, password) {
    // alert(username);
    history.push('/dashboard');
  }

  return (
    <S.Container>
      <S.LoginContainer>
        <S.Info>
          <S.Title>Camarão que dorme a onda leva :)</S.Title>
          <S.Text>
            Para continuar, entre com os dados de seu usuário administrativo.
          </S.Text>
        </S.Info>

        <Form onSubmit={onSubmit} />
      </S.LoginContainer>
    </S.Container>
  );
};
