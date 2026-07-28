import { Admin } from '../admin.model';
import * as AdminActions from './admin.actions';

export interface State {
  admins: Admin[];
}
const initialState: State = {
  admins: []
};

export function adminReducer(
  state = initialState,
  action: AdminActions.AdminsActions
) {
  switch (action.type) {
    case AdminActions.SET_ADMINS:
      return {
        ...state,
        admins: [...action.payload]
      };
    case AdminActions.ADD_ADMIN:
      return {
        ...state,
        admins: [...state.admins, action.payload]
      };
    case AdminActions.UPDATE_ADMIN:
      const updatedAdmin = {
        ...state.admins[action.payload.index],
        ...action.payload.newAdmin
      };
      const updatedAdmins = [...state.admins];
      updatedAdmins[action.payload.index] = updatedAdmin;
      return {
        ...state,
        admin: updatedAdmin
      };
    default:
      return state;
  }
}
