// @flow
import React, { HTMLAttributes } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Form from '@rjsf/material-ui';
import { useWorkflowManager } from '@flowbuild/redux-toolkit-workflow-manager/useWorkflowManager';
import { setSelectedActivity } from '../../../../redux/pageNavigation.slice';

import * as S from './styles';

interface Props extends HTMLAttributes<HTMLElement> {
  gridArea: string;
  content: any;
  isReport?: boolean;
}

export const Content: React.FC<Props> = ({
  gridArea,
  content,
  isReport,
  ...props
}) => {
  const dispatch = useDispatch();
  const { submitActivity } = useWorkflowManager();

  const { selectedActivity } = useSelector(
    (state) => state.pageNavigation,
    shallowEqual
  );

  const isJsonSchema = !!selectedActivity?.props?.result?.jsonSchema;
  const formSchema = getFormSchema();

  function getFormSchema() {
    if (isJsonSchema) {
      const schema = selectedActivity?.props?.result;
      return { jsonSchema: schema.jsonSchema, uiSchema: schema.uiSchema };
    }

    return { jsonSchema: null, uiSchema: null };
  }

  function onSubmit(event) {
    console.log('event', event);
    const { formData } = event;
    console.log('selectedActivity.id', selectedActivity.id);
    console.log('formData', formData);
    submitActivity(selectedActivity.id, formData);
    dispatch(setSelectedActivity(null));
  }

  return (
    <S.Container gridArea={gridArea}>
      <S.Pane>
        {isJsonSchema && (
          <Form
            schema={formSchema.jsonSchema}
            uiSchema={formSchema.uiSchema}
            onSubmit={onSubmit}
          />
        )}

        {!isJsonSchema && (
          <S.ReportContent
            dangerouslySetInnerHTML={{
              __html: selectedActivity?.props?.result.embed,
            }}
          />
        )}
      </S.Pane>
    </S.Container>
  );
};
