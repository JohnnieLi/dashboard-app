import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatTableModule,
        MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatIconModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatTableModule,
        MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatIconModule],
})
export class MyOwnCustomMaterialModule {
}