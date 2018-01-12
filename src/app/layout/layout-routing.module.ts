import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {UserManagerComponent} from './usersManager/usersManager.component';
import {NormalUserModule} from './normalUserProfile/normalUser.module';
import {NormalUserComponent} from './normalUserProfile/normalUser.component';
import {BusinessUserModule} from './businessUserProfile/businessUser.module';
import {BusinessUserComponent} from './businessUserProfile/businessUser.component';

import {FormsModule} from '@angular/forms';
import {UsernameFilterPipe} from './sharedPipes/usernameFiliter.pipe';
import {FirstNameFilterPipe} from './sharedPipes/firstNameFilter.pipe';
import {LastNameFilterPipe} from './sharedPipes/lastNameFilter.pipe';
import {AuthTypeFilterPipe} from './sharedPipes/authTypeFilter.pipe';
import {StatusFilterPipe} from './sharedPipes/statusFilter.pipe';
import {MyOwnCustomMaterialModule} from '../CustomMaterialModule.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'usersManager'
            },
            {
                path: 'adminDashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'usersManager',
                component: UserManagerComponent
            },
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
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes), MyOwnCustomMaterialModule, NormalUserModule, BusinessUserModule],
    exports: [RouterModule],
    declarations: [
        UserManagerComponent,
        FirstNameFilterPipe,
        UsernameFilterPipe,
        LastNameFilterPipe,
        AuthTypeFilterPipe,
        StatusFilterPipe
    ]
})
export class LayoutRoutingModule {
}
