import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import  {LoginComponent} from './login.component';



const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', loadChildren: './layout/layout.module#LayoutModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [LoginComponent]
})
export class AppRoutingModule {}