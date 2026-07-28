import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as AdminActions from './admin.actions';
import { Admin } from '../admin.model';
import * as fromApp from '../../store/app.reducer';
import common from '../../constant/common.const';

@Injectable()
export class AdminEffects {
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private store: Store<fromApp.AppState>
    ) { }

    fetchAdmins = createEffect(() => this.actions$.pipe(
        ofType(AdminActions.FETCH_ADMINS),
        switchMap(() => {
            return this.http.get<Admin[]>(
                `${common.url}Admin/GetAdministrators`
            );
        }),
        map(admins => {
            return admins.map(admin => {
                return {
                    ...admin,
                };
            });
        }),
        map(admins => {
            return new AdminActions.SetAdmins(admins);
        })
    ));

    addAdmin = createEffect(() => this.actions$.pipe(
        ofType(AdminActions.ADD_ADMIN),
        withLatestFrom(this.store.select('admins')),
        switchMap(([actionData, adminState]) => {
            return this.http.put(
                `${common.url}Admin/SaveAdmin`,
                adminState.admins
            );
        })
    ), { dispatch: false }
    );

    updateAdmin = createEffect(() => this.actions$.pipe(
        ofType(AdminActions.UPDATE_ADMIN),
        withLatestFrom(this.store.select('admins')),
        switchMap(([actionData, adminState]) => {
            return this.http.post(
                `${common.url}Admin/UpdateAdmin`,
                adminState.admins
            );
        })
    ), { dispatch: false }
    );
}
