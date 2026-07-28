import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/participants', 
    pathMatch: 'full' 
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  { 
    path: 'admin', 
    loadChildren: './admin/admin.module#AdminModule' },
  {
    path: 'participants',
    loadChildren: './participants/participants.module#ParticipantsModule'
  },
  {
    path: 'rang-list',
    loadChildren: './rang-list/rang-list.module#RangListModule'
  },
  {
    path: 'winner',
    loadChildren: './winner/winner.module#WinnerModule'
  },
  {
    path: 'voting',
    loadChildren: './voting/voting.module#VotingModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
