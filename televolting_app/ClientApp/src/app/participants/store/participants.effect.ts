import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as ParticipantsActions from './participants.actions';
import { Participant } from '../participant.model';
import * as fromApp from '../../store/app.reducer';
import common from '../../constant/common.const';

@Injectable()
export class ParticipantsEffects {
  fetchParticipants = createEffect(() => this.actions$.pipe(
    ofType(ParticipantsActions.FETCH_PARTICIPANTS),
    switchMap(() => {
      return this.http.get<Participant[]>(
        `${common.url}Participant/GetParticipants`
      );
    }),
    map(participants => {
      return participants.map(participant => {
        return {
          ...participant
        };
      });
    }),
    map(participants => {
      return new ParticipantsActions.SetParticipants(participants);
    })
  ));

  addParticipant = createEffect(() => this.actions$.pipe(
    ofType(ParticipantsActions.ADD_PARTICIPANT),
    withLatestFrom(this.store.select('participants')),
    switchMap(([actionData, participantState]) => {
      return this.http.put(
        `${common.url}Participant/SaveParticipant`,
        participantState.participant
      );
    })
  ),
  {dispatch: false}
  );

  updateParticipant = createEffect(() => this.actions$.pipe(
    ofType(ParticipantsActions.UPDATE_PARTICIPANT),
    withLatestFrom(this.store.select('participants')),
    switchMap(([actionData, participantState]) => {
      return this.http.post(
        `${common.url}Participant/UpdateParticipant`,
        participantState.participant
      );
    })
  ),
  {dispatch: false}
  );

  deleteParticipant = createEffect(() => this.actions$.pipe(
    ofType(ParticipantsActions.DELETE_PARTICIPANT),
    withLatestFrom(this.store.select('participants')),
    switchMap(([actionData, participantState]) => {
      return this.http.delete(
        `${common.url}Participant/DeleteParticipant?id=${participantState.participantIdx}`
      );
    })
  ),
  {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
