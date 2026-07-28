import { Winner } from '../winner.model';
import * as WinnerActions from './winner.actions';

export interface State {
  winner: Winner;
}

const initialState: State = {
  winner: null
};

export function winnerReducer(
  state = initialState,
  action: WinnerActions.WinnerActions
) {
  switch (action.type) {
    case WinnerActions.SET_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    default:
      return state;
  }
}
