import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantsComponent } from './participants.component';
import { AuthGuard } from '../auth/auth.guard';
import { ParticipantsEditComponent } from './participants-edit/participants-edit.component';
import { ParticipantsDetailComponent } from './participants-detail/participants-detail.component';
import { ParticipantsResolverService } from './participants-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ParticipantsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'new', component: ParticipantsEditComponent },
      {
        path: ':id',
        component: ParticipantsDetailComponent,
        resolve: [ParticipantsResolverService]
      },
      {
        path: ':id/edit',
        component: ParticipantsEditComponent,
        resolve: [ParticipantsResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
