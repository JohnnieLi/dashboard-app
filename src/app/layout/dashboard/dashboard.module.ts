import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { SharedComponentModule } from '../components/sharedComponent.module';

@NgModule({
    imports: [
        CommonModule,
        //NgbCarouselModule.forRoot(),
       // NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        SharedComponentModule
    ],
    declarations: [
       DashboardComponent
    ]
})
export class DashboardModule {}
