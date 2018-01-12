import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {BusinessUserComponent} from './businessUser.component';

import { SharedComponentModule } from '../components/sharedComponent.module';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
       // NgbAlertModule.forRoot(),
        SharedComponentModule
    ],
    declarations: [
        BusinessUserComponent
    ],
    // exports :[ 
    //     BusinessUserComponent
    // ]
})
export class BusinessUserModule {}
