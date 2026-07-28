import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as ParticipantsActions from '../store/participants.actions';

@Component({
  selector: 'app-participants-edit',
  templateUrl: './participants-edit.component.html',
  styleUrls: ['./participants-edit.component.css']
})
export class ParticipantsEditComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;
  id: number;
  editMode = false;
  private storeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(
        new ParticipantsActions.UpdateParticipant({
          index: this.id,
          newParticipant: this.slForm.value
        })
      );
    } else {
      this.store.dispatch(new ParticipantsActions.AddParticipant(this.slForm.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  private initForm() {
    if (this.editMode) {
      this.storeSub = this.store
      .select('participants')
      .pipe(
        map(dataState => {
          return dataState.participants.find((participant, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(participant => {
        this.slForm.setValue({
          name: participant.name,
          password: participant.password,
          canVote: participant.canVote
        });
      });
    } else {
      this.editMode = false;
    }
  }
}
