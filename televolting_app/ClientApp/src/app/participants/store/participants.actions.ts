import { Action } from '@ngrx/store';
import { Participant} from '../participant.model';

export const SET_PARTICIPANTS = '[Participants] Set Participants';
export const FETCH_PARTICIPANTS = '[Participants] Fetch Participants';
export const ADD_PARTICIPANT = '[Participants] Add Participant';
export const UPDATE_PARTICIPANT = '[Participants] Update Participant';
export const DELETE_PARTICIPANT = '[Participants] Delete Participant';


export class SetParticipants implements Action {
  readonly type = SET_PARTICIPANTS;
  constructor(public payload: Participant[]) {}
}

export class FetchParticipants implements Action {
  readonly type = FETCH_PARTICIPANTS;
}

export class AddParticipant implements Action {
  readonly type = ADD_PARTICIPANT;
  constructor(public payload: Participant) {}
}

export class UpdateParticipant implements Action {
  readonly type = UPDATE_PARTICIPANT;
  constructor(public payload: { index: number; newParticipant: Participant }) {}
}

export class DeleteParticipant implements Action {
  readonly type = DELETE_PARTICIPANT;
  constructor(public payload: number) {}
}

export type ParticipantsActions =
  | SetParticipants
  | FetchParticipants
  | AddParticipant
  | UpdateParticipant
  | DeleteParticipant;
