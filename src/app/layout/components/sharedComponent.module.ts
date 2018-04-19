import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TimelineComponent} from './timeline/timeline.component';
import {NotificationComponent} from './notification/notification.component';
import {ChartsComponent} from './chart/chart.component';
import {StatComponent} from './stat/stat.component';
import {ChatComponent} from './chat/chat.component';
import {PostListComponent} from './postList/postList.component';
import {ProfileComponent} from './profile/profile.component';
import {ChartsModule as Ng2Charts} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {PlanComponent} from './planSelector/plan.component';
import {PeriodPaymentComponent} from './periodSelector/periodPayment.component';
import {PromoDialogComponent} from './periodSelector/periodPayment.component';
import {MyOwnCustomMaterialModule} from '../../CustomMaterialModule.module';
@NgModule({
    imports: [
        CommonModule, Ng2Charts, NgbModule, FormsModule, MyOwnCustomMaterialModule
    ],
    declarations: [
        TimelineComponent,
        NotificationComponent,
        ChartsComponent,
        StatComponent,
        ChatComponent,
        PostListComponent,
        ProfileComponent,
        HeaderComponent,
        PlanComponent,
        PeriodPaymentComponent,
        PromoDialogComponent
    ],
    exports: [
        TimelineComponent,
        NotificationComponent,
        ChartsComponent,
        StatComponent,
        ChatComponent,
        PostListComponent,
        ProfileComponent,
        PlanComponent,
        PeriodPaymentComponent,
        PromoDialogComponent
    ],
    entryComponents: [ ChatComponent, PromoDialogComponent ]
})
export class SharedComponentModule {
}
