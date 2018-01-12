import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTabsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTabsModule],
})
export class MyOwnCustomMaterialModule { }