// @flow
import React, { useState, FormEvent } from 'react';
import { Button, Input } from '../../../../shared';

import * as S from './styles';

interface FormProps {
  onSubmit: (username: string, password: string) => void;
}

export const Form: React.FC<FormProps> = React.memo(({ onSubmit }) => {
  const [payload, setPayload] = useState({ username: '', password: '' });

  function onChangeText(event) {
    const { name, value } = event.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(payload.username, payload.password);
  }

  return (
    <S.Container onSubmit={handleSubmit}>
      <Input
        label="Usuário"
        name="username"
        placeholder="Nome do usuário"
        value={payload.username}
        onChange={onChangeText}
      />
      <Input
        label="Senha"
        name="password"
        placeholder="Senha"
        type="password"
        value={payload.password}
        onChange={onChangeText}
      />

      <Button type="button" title="Login" onClick={handleSubmit} />
    </S.Container>
  );
});
