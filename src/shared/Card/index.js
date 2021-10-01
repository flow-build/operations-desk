// @flow
import React from 'react';
import { Info } from '@styled-icons/material';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import * as S from './styles';

interface Props {
  title: string;
  description?: string;
  createdAt?: string;
}

export const Card: React.FC<Props> = ({ title, description, createdAt }) => {
  return (
    <S.Container>
      <S.Header>
        Empreendimentos <S.CloseIcon />
      </S.Header>
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Description>{description ?? ''}</S.Description>
      </S.Body>
      <S.Footer>
        <S.Description>{createdAt ?? ''}</S.Description>
        <S.FooterButtons>
          <IconButton iconSize={20} icon={Info} outline />
          <Button title="Acessar" outline />
        </S.FooterButtons>
      </S.Footer>
    </S.Container>
  );
};
