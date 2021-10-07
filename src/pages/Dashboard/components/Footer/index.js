// @flow
import React, { HTMLAttributes } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAvailableActivityManagersAsync,
  getAvailableWorkflowsAsync,
} from '@flowbuild/redux-toolkit-workflow-manager/workflowManager.slice';

import * as S from './styles';

const pjson = require('../../../../../package.json');

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
}

export const Footer: React.FC<Props> = ({ gridArea, children, ...props }) => {
  const dispatch = useDispatch();
  const { selectedActivity, totalActivities } = useSelector(
    (state) => state.pageNavigation
  );
  const hasFocus = !!selectedActivity?.process_id;

  const { version } = pjson;

  async function handleRefresh() {
    await dispatch(getAvailableWorkflowsAsync());
    await dispatch(getAvailableActivityManagersAsync());
  }

  return (
    <S.Container gridArea={gridArea} {...props}>
      <span>Versão {version}</span>

      {hasFocus && (
        <span>Processo em foco: {selectedActivity?.process_id}</span>
      )}

      <span>Número de atividades {totalActivities}</span>

      <span onClick={handleRefresh}>Refresh</span>
    </S.Container>
  );
};

/* Versão 0.0.1 - Processo em foco: 9a038a0d0a90-d8adasd9ads9 - Número de
      atividades: 4 */
