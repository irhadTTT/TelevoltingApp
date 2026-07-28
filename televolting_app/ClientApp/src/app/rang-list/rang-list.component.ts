import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { RangList } from './rang-list.model';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-rang-list',
  templateUrl: './rang-list.component.html',
  styleUrls: ['./rang-list.component.css']
})
export class RangListComponent implements OnInit, OnDestroy {
  rangLists: RangList[];
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.subscription = this.store
      .select('rangList')
      .pipe(map(rangState => rangState.rangList))
      .subscribe((rangLists: RangList[]) => {
        this.rangLists = rangLists;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
