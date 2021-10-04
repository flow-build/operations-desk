// import { useMemo } from 'react';
// import { useSelector, shallowEqual } from 'react-redux';

import { AVAILABLE_ACTIVITIES } from '../data';

export function useFilterAvailableActivity(filter = []) {
  const mapFilter = new Map(filter);
  const orderedAvailableAM = AVAILABLE_ACTIVITIES;
  // const orderedAvailableAM = useSelector(getAM, shallowEqual);

  const filteredAM = [...new Set(orderedAvailableAM.filter(getFilteredAM))];

  /* const filteredAM = useMemo(
    () => [...new Set(orderedAvailableAM.filter(getFilteredAM))],
    [orderedAvailableAM, getFilteredAM]
  ); */

  console.log('filteredAM', filteredAM);

  /* function getAM(state) {
    return state.workflowManager.activityManagerOrder.map(
      (id) => state.workflowManager.availableActivityManagers[id]
    );
  } */

  function getFilteredAM(activity) {
    console.log('activity', activity);
    return (
      mapFilter.has(activity.workflow_name) &&
      (mapFilter.get(activity.workflow_name).length === 0 ||
        mapFilter.get(activity.workflow_name).indexOf(activity.props.action) >=
          0)
    );
  }

  return filteredAM;
}
