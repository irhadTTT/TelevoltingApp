import { RangList } from '../rang-list.model';
import * as RangListActions from './rang-list.actions';

export interface State {
  rangList: RangList[];
}

const initialState: State = {
  rangList: []
};

export function rangListReducer(
  state = initialState,
  action: RangListActions.RangListActions
) {
  switch (action.type) {
    case RangListActions.SET_RANG_LIST:
      return {
        ...state,
        rangList: [...action.payload]
      };
    default:
      return state;
  }
}
