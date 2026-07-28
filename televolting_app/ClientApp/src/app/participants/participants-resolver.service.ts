import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Participant } from './participant.model';
import * as fromApp from '../store/app.reducer';
import * as ParticipantsActions from '../participants/store/participants.actions';

@Injectable({ providedIn: 'root' })
export class ParticipantsResolverService implements Resolve<Participant[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('participants').pipe(
      take(1),
      map(pState => {
        return pState.participants;
      }),
      switchMap(participants => {
        if (participants.length === 0) {
          this.store.dispatch(new ParticipantsActions.FetchParticipants());
          return this.actions$.pipe(
            ofType(ParticipantsActions.SET_PARTICIPANTS),
            take(1)
          );
        } else {
          return of(participants);
        }
      })
    );
  }
}
