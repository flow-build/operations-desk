// @flow
import React, { HTMLAttributes } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Form from '@rjsf/material-ui';

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
  const { selectedActivity } = useSelector(
    (state) => state.pageNavigation,
    shallowEqual
  );

  const isJsonSchema = !!selectedActivity?.props?.result?.jsonSchema;
  const formSchema = getFormSchema();

  console.log('selectedActivity', selectedActivity);

  function getFormSchema() {
    if (isJsonSchema) {
      const schema = selectedActivity?.props?.result;
      return { jsonSchema: schema.jsonSchema, uiSchema: schema.uiSchema };
    }

    return { jsonSchema: null, uiSchema: null };
  }

  // isReport && console.log('content', JSON.parse(content)[0]);
  /* {isReport && (
          <S.ReportContent
            dangerouslySetInnerHTML={{ __html: JSON.parse(content)[0].embed }}
          />
        )} */

  return (
    <S.Container gridArea={gridArea}>
      <S.Pane>
        {isJsonSchema && (
          <Form
            schema={formSchema.jsonSchema}
            uiSchema={formSchema.uiSchema}
            onSubmit={(e) => console.log('e', e)}
          />
        )}
      </S.Pane>
    </S.Container>
  );
};
