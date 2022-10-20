import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(customers: any, filterText?: any): any {
    // if (!value) return null;
    // if (!args) return value;
    if (!customers || !filterText) return customers;
    filterText = filterText.toLowerCase();
    debugger;
    return customers.filter(function (item: any) {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(filterText);
    });
  }
}



