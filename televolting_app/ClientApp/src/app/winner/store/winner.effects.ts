import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import * as WinnerActions from './winner.actions';
import { Winner } from '../winner.model';
import * as fromApp from '../../store/app.reducer';
import common from '../../constant/common.const';

@Injectable()
export class WinnerEffects {
  fetchWinner =createEffect(() => this.actions$.pipe(
    ofType(WinnerActions.FETCH_WINNER),
    switchMap(() => {
      return this.http.get<Winner>(
        common.url+'Voiting/GetWinner'
      );
    }),
    map(winner => {
        return {
          ...winner
        };
    }),
    map(winner => {
      return new WinnerActions.SetWinner(winner);
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
