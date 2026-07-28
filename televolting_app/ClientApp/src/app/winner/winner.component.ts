import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Winner } from './winner.model';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit, OnDestroy {
  winner: Winner;
  subscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}
  ngOnInit() {
    this.subscription = this.store
      .select('winner')
      .pipe(map(winner => winner.winner))
      .subscribe((winner: Winner) => {
        this.winner = winner;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
