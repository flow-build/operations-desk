import { Routes } from './routers';
import GlobalStyles from './styles/GlobalStyle';

import { Provider } from 'react-redux';
import { WorkflowManager } from '@flowbuild/redux-toolkit-workflow-manager';

import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
      <WorkflowManager>
        <Routes />
        <GlobalStyles />
      </WorkflowManager>
    </Provider>
  );
}

export default App;
