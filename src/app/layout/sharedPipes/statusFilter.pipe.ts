import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
    transform(items: any[], searchText: number): any[] {
        // console.log(items, searchText);
        if (!items) {
            return [];
        }
        if (!searchText) {

            return items;
        }

        if (searchText == 2) {

            return items;
        }
        return items.filter(it => {
            if (it.status == undefined) {
                return false;
            }
            return it.status == searchText;
        });
    }
}
