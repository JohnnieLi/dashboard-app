import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatTableModule,
        MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatIconModule,
        MatDialogModule],
    exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatTableModule,
        MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatIconModule,
        MatDialogModule],
})
export class MyOwnCustomMaterialModule {
}