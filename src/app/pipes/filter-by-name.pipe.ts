import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const result = [];
    for (const game of value) {
      if(game.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result.push(game);
      }
    }
    return result;
  }

}
