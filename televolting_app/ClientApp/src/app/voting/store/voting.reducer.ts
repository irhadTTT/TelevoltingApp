import { Voting } from '../voting.model';
import * as VotingActions from './votings.actions';

export interface State {
  voting: Voting;
}
const initialState: State = {
  voting: null
};

export function votingReducer(
  state = initialState,
  action: VotingActions.VotingsActions
) {
  switch (action.type) {
    case VotingActions.ADD_VOTINGS:
      return {
        ...state,
        voting: action.payload
      };
    case VotingActions.UPDATE_VOTIGNS:
      return {
        ...state,
        admin: action.payload.newVote
      };
    default:
      return state;
  }
}
