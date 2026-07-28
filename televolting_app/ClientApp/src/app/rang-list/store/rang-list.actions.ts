import { Action } from '@ngrx/store';
import { RangList } from '../rang-list.model';

export const FETCH_RANG_LIST = '[Rang List] Fetch Rang List';
export const SET_RANG_LIST = '[Rang List] Set Recipes';

export class FetchRangList implements Action {
  readonly type = FETCH_RANG_LIST;
}

export class SetRangList implements Action {
    readonly type = SET_RANG_LIST;
    constructor(public payload: RangList[]) {}
}

export type RangListActions =
  | FetchRangList
  | SetRangList
