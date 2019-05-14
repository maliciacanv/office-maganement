import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultSearch = [];
    for(const visitors of value) {
      if (visitors.nombre.tolowerCase().indexOf(args.tolowerCase()) > -1) {
        resultSearch.push(visitors)
      }
    }
    return resultSearch;
  }
 
}
