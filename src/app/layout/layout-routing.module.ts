import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsersManager} from './usersManager/usersManager.component';
import { NormalUserModule } from './normalUserProfile/normalUser.module';
import { NormalUserComponent} from './normalUserProfile/normalUser.component';
import { BusinessUserModule } from './businessUserProfile/businessUser.module';
import { BusinessUserComponent} from './businessUserProfile/businessUser.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'usersManager' },
            { path: 'adminDashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'usersManager', component: UsersManager },
            {
                path: 'normalUser/:id',
                component: NormalUserComponent,
                
            },
            {
                path: 'businessUser/:id',
                component: BusinessUserComponent,
            },
            
        ]
    }
];

@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes),NormalUserModule,BusinessUserModule],
    exports: [RouterModule],
     declarations: [
       UsersManager
    ]
})
export class LayoutRoutingModule {}
