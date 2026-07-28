import { ActionReducerMap } from '@ngrx/store';
import * as fromParticipants from '../participants/store/participants.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromAdmins from '../admin/store/admin.reducer';
import * as fromRangList from '../rang-list/store/rang-list.reducer';
import * as fromWinner from '../winner/store/winner.reducer';
import * as fromVoting from '../voting/store/voting.reducer';

export interface AppState {
    participants: fromParticipants.State;
    auth: fromAuth.State;
    admins: fromAdmins.State;
    rangList: fromRangList.State,
    winner: fromWinner.State,
    votings: fromVoting.State
}

export const appReducer: ActionReducerMap<AppState> = {
    participants: fromParticipants.participantsReducer,
    auth: fromAuth.authReducer,
    admins: fromAdmins.adminReducer,
    rangList: fromRangList.rangListReducer,
    winner: fromWinner.winnerReducer,
    votings: fromVoting.votingReducer
};
