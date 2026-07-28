import { Action } from '@ngrx/store';
import { Winner } from '../winner.model';

export const FETCH_WINNER = '[Winner] Fetch Winner';
export const SET_WINNER = '[Winner] Set Winner';

export class FetchWinner implements Action {
  readonly type = FETCH_WINNER;
}

export class SetWinner implements Action {
    readonly type = SET_WINNER;
    constructor(public payload: Winner) {}
}

export type WinnerActions =
  | FetchWinner
  | SetWinner
