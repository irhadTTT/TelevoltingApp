import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import * as RangListActions from './rang-list.actions';
import { RangList } from '../rang-list.model';
import * as fromApp from '../../store/app.reducer';
import common from '../../constant/common.const';

@Injectable()
export class RangListEffects {
  fetchRangList =createEffect(() => this.actions$.pipe(
    ofType(RangListActions.FETCH_RANG_LIST),
    switchMap(() => {
      return this.http.get<RangList[]>(
        `${common.url}Voiting/GetVotes`
      );
    }),
    map(rangList => {
      return rangList.map(rang => {
        return {
          ...rang
        };
      });
    }),
    map(rangList => {
      return new RangListActions.SetRangList(rangList);
    })
  ));

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
