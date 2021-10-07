// @flow
import React, { HTMLAttributes, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import * as S from './styles';
import { Card } from '../../../../shared';
import { useFilterAvailableActivity } from '../../../../hooks/useFilterAvailableActivity.hook';
import {
  setSelectedActivity,
  setTotalActivities,
} from '../../../../redux/pageNavigation.slice';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const SideList: React.FC<Props> = ({ gridArea, ...props }) => {
  const dispatch = useDispatch();
  const { currentFilter, totalActivities } = useSelector(
    (state) => state.pageNavigation,
    shallowEqual
  );

  const items = useFilterAvailableActivity(currentFilter);

  useEffect(() => {
    if (totalActivities !== items.length) {
      dispatch(setTotalActivities(items.length));
    }
  }, [totalActivities, items]);

  function onAccess(activity) {
    try {
      dispatch(setSelectedActivity(activity));
    } catch (error) {
      const message = 'Erro ao tentar acessar a informação do card.';
      console.error(message, error);
    }
  }

  return (
    <S.Container gridArea={gridArea}>
      {items.map((i, index) => (
        <Card
          key={index.toString()}
          title={i.props.result.card.title}
          description={i.props.result.card.description}
          onAccess={() => onAccess(i)}
        />
      ))}
    </S.Container>
  );
};
