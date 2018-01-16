import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'authTypeFilter'
})
export class AuthTypeFilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        // console.log(searchText);

        if (!items) {
            return [];
        }
        if (!searchText) {

            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            if (!it.authType) {
                return false;
            }
            return it.authType.toLowerCase().includes(searchText);
        });
    }
}