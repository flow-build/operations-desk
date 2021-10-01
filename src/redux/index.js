import { configureStore } from '@reduxjs/toolkit';

import pageNavigationReducer from './pageNavigation.slice';

import loginReducer from '@flowbuild/redux-toolkit-workflow-manager/login.slice';
import WorkflowManagerSlice from '@flowbuild/redux-toolkit-workflow-manager/workflowManager.slice';

export const store = configureStore({
  reducer: {
    pageNavigation: pageNavigationReducer,

    login: loginReducer,
    workflowManager: WorkflowManagerSlice('http://3.82.154.55:3000'),
  },
});
