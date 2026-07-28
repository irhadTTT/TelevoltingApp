import { Action } from '@ngrx/store';
import { Voting } from '../voting.model';

export const ADD_VOTINGS = '[Votings] Add Votings';
export const UPDATE_VOTIGNS = '[Votings] Update Votings';

export class AddVoting implements Action {
  readonly type = ADD_VOTINGS;
  constructor(public payload: Voting) {}
}

export class UpdateVoting implements Action {
  readonly type = UPDATE_VOTIGNS;
  constructor(public payload: { newVote: Voting }) {}
}

export type VotingsActions =
  | AddVoting
  | UpdateVoting;
