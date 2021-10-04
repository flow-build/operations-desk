export const AVAILABLE_ACTIVITIES = [
  {
    id: '92534770-22df-11ec-a4a8-1eef6003aa3c',
    created_at: '2021-10-01T17:46:30.119Z',
    type: 'commit',
    process_state_id: '82539590-22df-11ec-a4a8-1def6003aa3b',
    props: {
      action: 'JSON_FORM',
      result: {
        card: {
          source: 'Business',
          color: 'blue',
          title: 'Sumário de análises 2',
          description: 'Sumário de análise feitas até o momento.',
        },
        jsonSchema: {
          title: 'A registration form',
          description: 'A simple form example.',
          type: 'object',
          required: ['firstName', 'lastName'],
          properties: {
            firstName: {
              type: 'string',
              title: 'First name',
              default: 'Chuck',
            },
            lastName: {
              type: 'string',
              title: 'Last name',
            },
            telephone: {
              type: 'string',
              title: 'Telephone',
              minLength: 10,
            },
          },
        },
        uiSchema: {
          firstName: {
            'ui:autofocus': true,
            'ui:emptyValue': '',
            'ui:autocomplete': 'family-name',
          },
          lastName: {
            'ui:emptyValue': '',
            'ui:autocomplete': 'given-name',
          },
          age: {
            'ui:widget': 'updown',
            'ui:title': 'Age of person',
            'ui:description': '(earthian year)',
          },
          bio: {
            'ui:widget': 'textarea',
          },
          password: {
            'ui:widget': 'password',
            'ui:help': 'Hint: Make it strong!',
          },
          date: {
            'ui:widget': 'alt-datetime',
          },
          telephone: {
            'ui:options': {
              inputType: 'tel',
            },
          },
        },
      },
    },
    status: 'started',
    process_id: 'b60d45d0-22de-11ec-a4a8-1def6003aa3b',
    activities: [],
    workflow_id: '4b240c90-207c-11ec-8a06-eb75a9248945',
    workflow_name: 'homeTeste',
    bag: {
      chat_id: 'e5de3925-000d-4af4-9d1e-9b69b54a5ba8',
      requested: false,
      account_id: 'acf177e0-a396-11eb-9b30-6f1917ccdda2',
      external_id: '82249650-22df-11ec-8dd0-170875093e16',
      default_claims: ['appAcess', 'request', 'useApp'],
    },
  },
];
