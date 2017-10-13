import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from "./quote"
@Pipe({
  name: 'orderby',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(arr: Array<any>, key, method): any {
      for (let i = 0; i < arr.length; i ++){
          if (arr[i].rating <  arr[i+1].rating) {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
          }
        }
      if (method === 'asc') {
        return arr;
      }
      return arr.reverse();
  };
};
