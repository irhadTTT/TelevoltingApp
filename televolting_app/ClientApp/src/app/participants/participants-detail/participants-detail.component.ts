import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import * as ParticipantsActions from '../store/participants.actions';
import { Participant } from '../participant.model';

@Component({
  selector: 'app-participants-detail',
  templateUrl: './participants-detail.component.html',
  styleUrls: ['./participants-detail.component.css']
})
export class ParticipantsDetailComponent implements OnInit {
  participant: Participant;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('participants');
        }),
        map(participantsState => {
          return participantsState.participants.find((participant, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(participant => {
        this.participant = participant;
      });
  }

  onEditParticipant() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteParticipant() {
    this.store.dispatch(new ParticipantsActions.DeleteParticipant(this.id));
    this.router.navigate(['/participants']);
  }
}
