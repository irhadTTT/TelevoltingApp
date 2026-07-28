import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RangListComponent } from './rang-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RangListComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: RangListComponent }]),
    SharedModule
  ],
})
export class RangListModule {}