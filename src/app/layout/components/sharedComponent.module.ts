import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TimelineComponent} from './timeline/timeline.component';
import {NotificationComponent} from './notification/notification.component';
import {ChartsComponent} from './chart/chart.component';
import {StatComponent} from './stat/stat.component';
import {ChatComponent} from './chat/chat.component';
import {PostListComponent} from './postList/postList.component';
import {ProfileComponent} from './profile/profile.component';
import {ChartsModule as Ng2Charts} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, Ng2Charts, NgbModule
    ],
    declarations: [
        TimelineComponent,
        NotificationComponent,
        ChartsComponent,
        StatComponent,
        ChatComponent,
        PostListComponent,
        ProfileComponent
    ],
    exports: [
        TimelineComponent,
        NotificationComponent,
        ChartsComponent,
        StatComponent,
        ChatComponent,
        PostListComponent,
        ProfileComponent
    ]
})
export class SharedComponentModule {
}
