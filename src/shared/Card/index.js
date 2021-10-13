// @flow
import React from "react";
import { Info } from "@styled-icons/material";
import { Button } from "../Button";
import { IconButton } from "../IconButton";

import * as S from "./styles";

interface Props {
  source?: string;
  title: string;
  description?: string;
  createdAt?: string;
  onAccess?: Function;
  onInfo?: Function;
}

export const Card: React.FC<Props> = ({ source, title, description, createdAt, onAccess, onInfo }) => {
  return (
    <S.Container>
      <S.Header>
        {source ?? ""} <S.CloseIcon />
      </S.Header>
      <S.Body>
        <S.Title>{title}</S.Title>
        <S.Description>{description ?? ""}</S.Description>
      </S.Body>
      <S.Footer>
        <S.Description>{createdAt ?? ""}</S.Description>
        <S.FooterButtons>
          <IconButton iconSize={20} icon={Info} outline onClick={onInfo} />
          <Button title="Acessar" outline onClick={onAccess} />
        </S.FooterButtons>
      </S.Footer>
    </S.Container>
  );
};
