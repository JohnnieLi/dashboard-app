import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {NormalUserComponent} from './normalUser.component';

import { SharedComponentModule } from '../components/sharedComponent.module';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
       // NgbAlertModule.forRoot(),
        SharedComponentModule
    ],
    declarations: [
        NormalUserComponent
    ],
    exports :[ 
        NormalUserComponent
    ]
})
export class NormalUserModule {}
