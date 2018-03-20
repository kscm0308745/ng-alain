import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AngularSplitModule } from 'angular-split';

import { OtherRoutingModule } from './other-routing.module';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OtherRoutingModule,
    AngularSplitModule
  ],
  declarations: [ClipboardComponent, PrintComponent]
})
export class OtherModule { }
