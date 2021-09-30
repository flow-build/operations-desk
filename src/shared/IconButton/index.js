// @flow
import React, { ButtonHTMLAttributes } from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';

import { colors } from '../../styles';
import * as S from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: StyledIcon;
  iconColor?: string;
  iconSize?: number;
  outline?: boolean;
}

export const IconButton: React.FC<Props> = ({
  icon: Icon,
  outline,
  iconColor = '#FFF',
  iconSize = 16,
  ...props
}) => {
  return (
    <S.Container outline={outline} {...props}>
      <Icon
        width={iconSize}
        height={iconSize}
        color={outline ? colors.Primary : iconColor}
      />
    </S.Container>
  );
};
