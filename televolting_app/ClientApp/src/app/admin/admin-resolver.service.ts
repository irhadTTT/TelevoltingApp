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
import { Admin } from './admin.model';
import * as fromApp from '../store/app.reducer';
import * as AdminActions from '../admin/store/admin.actions';

@Injectable({ providedIn: 'root' })
export class AdminResolverService implements Resolve<Admin[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('admins').pipe(
      take(1),
      map(adminState => {
        return adminState.admins;
      }),
      switchMap(admins => {
        if (admins.length === 0) {
          this.store.dispatch(new AdminActions.FetchAdmins());
          return this.actions$.pipe(
            ofType(AdminActions.SET_ADMINS),
            take(1)
          );
        } else {
          return of(admins);
        }
      })
    );
  }
}
