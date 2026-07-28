import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VoitingComponent } from './voting.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VoitingComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: VoitingComponent }]),
    SharedModule
  ],
})
export class VotingModule {}