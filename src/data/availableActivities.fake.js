export const AVAILABLE_ACTIVITIES = [
  {
    id: '2f1b4680-2554-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T20:46:43.944Z',
    type: 'commit',
    process_state_id: '2f1b6d90-2554-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '2f1c7f00-2554-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '1eada5e0-2554-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: '40198e60-2554-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T20:47:12.454Z',
    type: 'commit',
    process_state_id: '40198e61-2554-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '401a51b0-2554-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '4012feb0-2554-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: 'c7a32b10-2555-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T20:58:09.345Z',
    type: 'commit',
    process_state_id: 'c7a35220-2555-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: 'c7a41570-2555-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: 'c79d1090-2555-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: 'cce48920-2555-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T20:58:18.162Z',
    type: 'commit',
    process_state_id: 'cce4b030-2555-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: 'cce57380-2555-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: 'ccdcc0f0-2555-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: 'd0df8480-2555-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T20:58:24.840Z',
    type: 'commit',
    process_state_id: 'd0dfab90-2555-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: 'd0e047d0-2555-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: 'd0d8a6b0-2555-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: 'd910fda0-2555-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T20:58:38.586Z',
    type: 'commit',
    process_state_id: 'd91124b0-2555-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: 'd911c0f0-2555-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: 'd90ae320-2555-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: 'dca743c0-2555-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T20:58:44.604Z',
    type: 'commit',
    process_state_id: 'dca76ad0-2555-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: 'dca82e20-2555-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: 'dca15050-2555-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: '0c243f40-2556-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:00:04.276Z',
    type: 'commit',
    process_state_id: '0c279aa0-2556-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '0c309b50-2556-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '0bd9c8c0-2556-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: '554c6d50-2556-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:02:07.013Z',
    type: 'commit',
    process_state_id: '554c6d51-2556-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '554d57b0-2556-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '5543e1d0-2556-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: '69586a60-2556-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:02:40.646Z',
    type: 'commit',
    process_state_id: '69589170-2556-11ec-9328-e158e5af91f3',
    props: {
      action: 'LOGIN',
      result: {
        timeout: 0,
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '69597bd0-2556-11ec-9328-e158e5af91f3',
      encrypted_data: ['password'],
      activity_schema: {
        type: 'object',
        properties: {
          password: {
            oneOf: [
              {
                type: 'string',
              },
              {
                type: 'object',
                required: ['iv', 'crypted_text'],
                properties: {
                  iv: {
                    type: 'string',
                  },
                  crypted_text: {
                    type: 'string',
                  },
                },
              },
            ],
          },
          username: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '57d03200-2556-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'LOGIN',
    next_node_id: 'LOGIN',
    bag: {
      actor: {
        actor_id: 'e0620600-254e-11ec-9328-e158e5af91f3',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '0dd3fd00-2554-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'appAccess',
    workflow_description: 'Fluxo de acesso ao App (autenticação e autorização)',
    node_name: 'login page',
  },
  {
    id: 'ffff1660-2558-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:21:12.390Z',
    type: 'commit',
    process_state_id: 'ffff1661-2558-11ec-9328-e158e5af91f3',
    props: {
      action: 'METABASE',
      result: {
        card: {
          color: '#5e4c7e',
          title: 'Dolorem nisi dolorum ipsam dicta molestiae et.',
          source: 'necessitatibus',
          description:
            'Fugiat sequi aliquid et doloribus voluptatem et et vitae.',
        },
        embed:
          '<iframe src="http://3.231.180.105:8080/public/dashboard/96b64562-f347-43b8-a77e-91379d9528ee" frameborder="0" width="100%" height="100%" allowtransparency />',
      },
    },
    parameters: {
      activity_schema: {},
      next_step_number: 7,
    },
    activity_status: 'started',
    process_id: 'fff7ea71-2558-11ec-9328-e158e5af91f3',
    step_number: 6,
    node_id: 'METABASE',
    next_node_id: 'METABASE',
    bag: {
      draw: 2,
      cards: [
        {
          color: '#346c55',
          title: 'Quia nihil minus et.',
          source: 'sit',
          description: 'Laudantium excepturi ea cupiditate et optio.',
        },
        {
          color: '#55647c',
          title: 'At et alias ullam non provident et.',
          source: 'aut',
          description:
            'Quasi adipisci nihil corrupti quae exercitationem qui ea aut molestiae.',
        },
        {
          color: '#5e4c7e',
          title: 'Dolorem nisi dolorum ipsam dicta molestiae et.',
          source: 'necessitatibus',
          description:
            'Fugiat sequi aliquid et doloribus voluptatem et et vitae.',
        },
        {
          color: '#0e6d23',
          title: 'Atque aut tempore laudantium sint.',
          source: 'consequatur',
          description: 'Aut quidem cupiditate qui nemo libero est.',
        },
        {
          color: '#346904',
          title: 'Aut eum hic blanditiis in fugit magnam.',
          source: 'explicabo',
          description: 'Doloribus rerum eveniet.',
        },
        {
          color: '#336c19',
          title: 'Eum rerum iste soluta odio officiis aperiam.',
          source: 'et',
          description: 'Et quasi cumque dolore aspernatur.',
        },
        {
          color: '#543676',
          title: 'Magni ex ipsam ut quis voluptatem quia expedita beatae.',
          source: 'qui',
          description: 'Veniam dolores dicta.',
        },
        {
          color: '#554214',
          title: 'Sunt voluptates amet ut laborum.',
          source: 'quidem',
          description: 'Dolor placeat velit doloribus.',
        },
        {
          color: '#080813',
          title: 'Velit animi et et optio earum quasi illum ipsam.',
          source: 'officiis',
          description: 'Quae suscipit qui animi officiis.',
        },
        {
          color: '#285747',
          title: 'Ut quia quia aliquid ab.',
          source: 'modi',
          description: 'Et voluptas doloremque consequatur recusandae minima.',
        },
        {
          color: '#713c46',
          title: 'Tempore at sint sed explicabo rerum voluptas ut omnis.',
          source: 'autem',
          description: 'Consequatur ut repellendus laborum aliquam.',
        },
      ],
      selectedCard: {
        color: '#5e4c7e',
        title: 'Dolorem nisi dolorum ipsam dicta molestiae et.',
        source: 'necessitatibus',
        description:
          'Fugiat sequi aliquid et doloribus voluptatem et et vitae.',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: 'f873a140-2558-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'sobreTeste',
    workflow_description: 'Fluxo de teste para aba sobre da mesa',
    node_name: 'Show Metabase Report',
  },
  {
    id: '066da9d0-2559-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:21:23.181Z',
    type: 'commit',
    process_state_id: '066da9d1-2559-11ec-9328-e158e5af91f3',
    props: {
      action: 'METABASE',
      result: {
        card: {
          color: '#554214',
          title: 'Sunt voluptates amet ut laborum.',
          source: 'quidem',
          description: 'Dolor placeat velit doloribus.',
        },
        embed:
          '<iframe src="http://3.231.180.105:8080/public/dashboard/96b64562-f347-43b8-a77e-91379d9528ee" frameborder="0" width="100%" height="100%" allowtransparency />',
      },
    },
    parameters: {
      activity_schema: {},
      next_step_number: 7,
    },
    activity_status: 'started',
    process_id: '066608b1-2559-11ec-9328-e158e5af91f3',
    step_number: 6,
    node_id: 'METABASE',
    next_node_id: 'METABASE',
    bag: {
      draw: 7,
      cards: [
        {
          color: '#346c55',
          title: 'Quia nihil minus et.',
          source: 'sit',
          description: 'Laudantium excepturi ea cupiditate et optio.',
        },
        {
          color: '#55647c',
          title: 'At et alias ullam non provident et.',
          source: 'aut',
          description:
            'Quasi adipisci nihil corrupti quae exercitationem qui ea aut molestiae.',
        },
        {
          color: '#5e4c7e',
          title: 'Dolorem nisi dolorum ipsam dicta molestiae et.',
          source: 'necessitatibus',
          description:
            'Fugiat sequi aliquid et doloribus voluptatem et et vitae.',
        },
        {
          color: '#0e6d23',
          title: 'Atque aut tempore laudantium sint.',
          source: 'consequatur',
          description: 'Aut quidem cupiditate qui nemo libero est.',
        },
        {
          color: '#346904',
          title: 'Aut eum hic blanditiis in fugit magnam.',
          source: 'explicabo',
          description: 'Doloribus rerum eveniet.',
        },
        {
          color: '#336c19',
          title: 'Eum rerum iste soluta odio officiis aperiam.',
          source: 'et',
          description: 'Et quasi cumque dolore aspernatur.',
        },
        {
          color: '#543676',
          title: 'Magni ex ipsam ut quis voluptatem quia expedita beatae.',
          source: 'qui',
          description: 'Veniam dolores dicta.',
        },
        {
          color: '#554214',
          title: 'Sunt voluptates amet ut laborum.',
          source: 'quidem',
          description: 'Dolor placeat velit doloribus.',
        },
        {
          color: '#080813',
          title: 'Velit animi et et optio earum quasi illum ipsam.',
          source: 'officiis',
          description: 'Quae suscipit qui animi officiis.',
        },
        {
          color: '#285747',
          title: 'Ut quia quia aliquid ab.',
          source: 'modi',
          description: 'Et voluptas doloremque consequatur recusandae minima.',
        },
        {
          color: '#713c46',
          title: 'Tempore at sint sed explicabo rerum voluptas ut omnis.',
          source: 'autem',
          description: 'Consequatur ut repellendus laborum aliquam.',
        },
      ],
      selectedCard: {
        color: '#554214',
        title: 'Sunt voluptates amet ut laborum.',
        source: 'quidem',
        description: 'Dolor placeat velit doloribus.',
      },
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: 'f873a140-2558-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'sobreTeste',
    workflow_description: 'Fluxo de teste para aba sobre da mesa',
    node_name: 'Show Metabase Report',
  },
  {
    id: '1ecfa8a0-255b-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:36:23.082Z',
    type: 'commit',
    process_state_id: '1ecfa8a1-255b-11ec-9328-e158e5af91f3',
    props: {
      action: 'FORM',
      result: {
        card: {
          color: 'blue',
          title: 'Início da Plantação',
          source: 'Girassol',
          description: 'Atualizar status da plantação',
        },
        uiSchema: {
          florada: {
            'ui:widget': 'radio',
          },
        },
        jsonSchema: {
          type: 'object',
          title: 'Plantação',
          properties: {
            cancel: {
              type: 'boolean',
              title: 'Houve cancelamento da plantação?',
            },
            florada: {
              type: 'boolean',
              title: 'Ocorreu a florada?',
            },
          },
          description: 'A plantação foi iniciada?',
        },
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '1ed09300-255b-11ec-9328-e158e5af91f3',
      activity_schema: {
        type: 'object',
        properties: {
          cancel: {
            type: 'boolean',
          },
          florada: {
            type: 'boolean',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '1ec94000-255b-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'SEED',
    next_node_id: 'SEED',
    bag: {
      draw: 6,
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '167809e0-255b-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'homeTeste',
    workflow_description: 'Fluxo de teste para aba HOME da mesa',
    node_name: 'Get Seed Data',
  },
  {
    id: '24370540-255b-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:36:32.148Z',
    type: 'commit',
    process_state_id: '24370541-255b-11ec-9328-e158e5af91f3',
    props: {
      action: 'FORM',
      result: {
        card: {
          color: 'blue',
          title: 'Florada da Plantação',
          source: 'Girassol',
          description: 'Atualizar status da florada',
        },
        uiSchema: {
          florada: {
            'ui:widget': 'radio',
          },
        },
        jsonSchema: {
          type: 'object',
          title: 'Atualizar status da plantação',
          properties: {
            cancel: {
              type: 'boolean',
              title: 'Houve cancelamento da plantação?',
            },
            florada: {
              type: 'boolean',
              title: 'Ocorreu a florada?',
            },
          },
          description: 'Ocorreu a florada?',
        },
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '2437c890-255b-11ec-9328-e158e5af91f3',
      activity_schema: {
        type: 'object',
        properties: {
          cancel: {
            type: 'boolean',
          },
          florada: {
            type: 'boolean',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '242ea0d0-255b-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'FLOURISH',
    next_node_id: 'FLOURISH',
    bag: {
      draw: 5,
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '167809e0-255b-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'homeTeste',
    workflow_description: 'Fluxo de teste para aba HOME da mesa',
    node_name: 'Get Crop Flourish Data',
  },
  {
    id: '25947260-255b-11ec-9328-e158e5af91f3',
    created_at: '2021-10-04T21:36:34.438Z',
    type: 'commit',
    process_state_id: '25949970-255b-11ec-9328-e158e5af91f3',
    props: {
      action: 'FORM',
      result: {
        card: {
          color: 'green',
          title: 'Cadastro de Plantação',
          source: 'Girassol',
          description: 'Dados cadastrais de uma plantação de Girassol.',
        },
        uiSchema: {
          farmer: {
            'ui:widget': 'radio',
          },
          volume: {
            'ui:widget': 'range',
          },
          location: {
            'ui:widget': 'select',
          },
        },
        jsonSchema: {
          type: 'object',
          title: 'Cadastrar uma nova plantação',
          properties: {
            name: {
              type: 'string',
              title: 'Nome da Plantação',
            },
            farmer: {
              enum: ['Usuario 1', 'Usuário 2'],
              type: 'string',
              title: 'Responsável',
            },
            volume: {
              type: 'integer',
              title: 'Volume',
              maximun: 100000,
              minimum: 100,
            },
            location: {
              enum: [
                'Itapetininga',
                'Rondonópolis',
                'Três Lagoas',
                'Rio Verde',
                'Ponta Grossa',
                'Barreiras',
              ],
              type: 'string',
              title: 'Local da Plantação',
            },
          },
          description: 'Informe os dados da nova plantação.',
        },
      },
    },
    parameters: {
      timeout: 86400,
      timeout_id: '25955cc0-255b-11ec-9328-e158e5af91f3',
      activity_schema: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          farmer: {
            type: 'string',
          },
          volume: {
            type: 'integer',
          },
          location: {
            type: 'string',
          },
        },
      },
      next_step_number: 6,
    },
    activity_status: 'started',
    process_id: '258e57e0-255b-11ec-9328-e158e5af91f3',
    step_number: 5,
    node_id: 'CROP',
    next_node_id: 'CROP',
    bag: {
      draw: 9,
    },
    external_input: null,
    error: null,
    process_status: 'waiting',
    workflow_id: '167809e0-255b-11ec-9328-e158e5af91f3',
    current_status: 'waiting',
    workflow_name: 'homeTeste',
    workflow_description: 'Fluxo de teste para aba HOME da mesa',
    node_name: 'Get Crop Data',
  },
];
