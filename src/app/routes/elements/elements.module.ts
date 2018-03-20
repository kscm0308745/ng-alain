import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DndModule } from 'ng2-dnd';

import { ElementsRoutingModule } from './elements-routing.module';

import { GridMasonryComponent } from './gridmasonry/gridmasonry.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsFontComponent } from './iconsfont/iconsfont.component';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
    imports: [
        SharedModule,
        ElementsRoutingModule,
        DndModule.forRoot()
    ],
    declarations: [
        GridMasonryComponent,
        TypographyComponent,
        IconsFontComponent,
        ColorsComponent
    ]
})
export class ElementsModule { }
