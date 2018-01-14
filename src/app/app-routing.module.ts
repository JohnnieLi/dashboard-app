import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
// import {LoginService} from './login.service';
import {AlwaysLoggedInGuard} from './guards/alwaysLoggedInGuard';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {
        path: 'dashboard', loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AlwaysLoggedInGuard],
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [LoginComponent],
    providers: [ AlwaysLoggedInGuard]
})
export class AppRoutingModule {
}