import React from 'react';
import { Info } from '@styled-icons/material';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import * as S from './styles';

export const Card = () => {
  return (
    <S.Container>
      <S.Header>
        Empreendimentos <S.CloseIcon />
      </S.Header>
      <S.Body>
        <S.Title>Título do card</S.Title>
        <S.Description>Texto contendo a descrição do card</S.Description>
      </S.Body>
      <S.Footer>
        <S.Description>Criado em 30/09/2021</S.Description>
        <S.FooterButtons>
          <IconButton iconSize={20} icon={Info} outline />
          <Button title="Acessar" outline />
        </S.FooterButtons>
      </S.Footer>
    </S.Container>
  );
};
