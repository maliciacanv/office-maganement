import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSearch = [];
    for(const visitor of value) {
      if (visitor.nombre.indexOf(arg) > -1 ) {
        resultSearch.push(visitor)
      };
    };
    return resultSearch;
  }
 
}
