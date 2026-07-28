import { Action } from '@ngrx/store';
import { Admin } from '../admin.model';

export const SET_ADMINS = '[Admins] Set Admins';
export const FETCH_ADMINS = '[Admins] Fetch Admins';
export const ADD_ADMIN = '[Admins] Add Admin';
export const UPDATE_ADMIN = '[Admins] Update Admin';

export class SetAdmins implements Action {
  readonly type = SET_ADMINS;
  constructor(public payload: Admin[]) {}
}

export class FetchAdmins implements Action {
  readonly type = FETCH_ADMINS;
}

export class AddAdmin implements Action {
  readonly type = ADD_ADMIN;
  constructor(public payload: Admin) {}
}

export class UpdateAdmin implements Action {
  readonly type = UPDATE_ADMIN;
  constructor(public payload: { index: number; newAdmin: Admin }) {}
}

export type AdminsActions =
  | SetAdmins
  | FetchAdmins
  | AddAdmin
  | UpdateAdmin;
