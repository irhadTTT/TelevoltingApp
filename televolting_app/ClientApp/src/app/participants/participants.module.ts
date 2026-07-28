import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticipantsComponent } from './participants.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { ParticipantsEditComponent } from './participants-edit/participants-edit.component';
import { ParticipantItemComponent } from './participants-list/participant-item/participant-item.component';
import { ParticipantsDetailComponent } from './participants-detail/participants-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ParticipantsComponent,
    ParticipantsListComponent,
    ParticipantsEditComponent,
    ParticipantItemComponent,
    ParticipantsDetailComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ParticipantsModule {}
