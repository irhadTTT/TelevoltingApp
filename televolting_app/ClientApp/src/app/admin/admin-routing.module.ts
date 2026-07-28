import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
//import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminResolverService } from './admin-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: AdminComponent },
      { path: 'new', component: AdminEditComponent },
      {
        path: ':id',
        resolve: [AdminResolverService]
      },
      {
        path: ':id/edit',
        component: AdminEditComponent,
        resolve: [AdminResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
