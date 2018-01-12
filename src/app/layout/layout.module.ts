import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { SharedComponentModule } from './components/sharedComponent.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedComponentModule
    ],
    declarations: [LayoutComponent, SidebarComponent],

})
export class LayoutModule {}
