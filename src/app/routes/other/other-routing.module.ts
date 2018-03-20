import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
    { path: 'clipboard', component: ClipboardComponent },
    { path: 'print', component: PrintComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
