import { Routes } from './routers';
import GlobalStyles from './styles/GlobalStyle';

import { Provider } from 'react-redux';
import { WorkflowManager } from '@flowbuild/redux-toolkit-workflow-manager';

import { store } from './redux';

const chars = [
  ...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
];
const randomId = [...Array(19)].map(
  (i) => chars[(Math.random() * chars.length) | 0]
).join``;

const MQTT_CONFIG = {
  host: process.env.REACT_APP_MQTT_URL,
  port: parseInt(process.env.REACT_APP_MQTT_PORT),
  clientId: randomId,
};

function App() {
  return (
    <Provider store={store}>
      <WorkflowManager mqttConfig={MQTT_CONFIG}>
        <Routes />
        <GlobalStyles />
      </WorkflowManager>
    </Provider>
  );
}

export default App;
