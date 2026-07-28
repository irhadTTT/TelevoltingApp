import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';
import * as VotingsActions from './votings.actions';
import * as fromApp from '../../store/app.reducer';
import { Router } from '@angular/router';
import common from '../../constant/common.const';

@Injectable()
export class VotingEffects {
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>,
        private router: Router
    ) { }

    addVoting = createEffect(() => this.actions$.pipe(
        ofType(VotingsActions.ADD_VOTINGS),
        withLatestFrom(this.store.select('votings')),
        switchMap(([actionData, votingState]) => {
            return this.http.put(
                `${common.url}Voiting/SaveVote`,
                votingState.voting
            );
        }),
        tap(() => this.router.navigateByUrl('/rang-list'))
    ), { dispatch: false }
    );

    updateAdmin = createEffect(() => this.actions$.pipe(
        ofType(VotingsActions.UPDATE_VOTIGNS),
        withLatestFrom(this.store.select('votings')),
        switchMap(([actionData, votingState]) => {
            return this.http.post(
                `${common.url}Voiting/SaveVote`,
                votingState.voting
            );
        }),
        tap(() => this.router.navigateByUrl('/rang-list'))
    ), { dispatch: false }
    );
}
