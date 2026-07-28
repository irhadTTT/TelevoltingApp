import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WinnerComponent } from './winner.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WinnerComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: WinnerComponent }]),
    SharedModule
  ],
})
export class WinnerModule {}