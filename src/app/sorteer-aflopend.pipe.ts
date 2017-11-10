import { Pipe, PipeTransform } from '@angular/core';
import { GemsListComponent } from './gems-list/gems-list.component'

@Pipe({
  name: 'sorteerAflopend'
})

export class SorteerAflopendPipe implements PipeTransform {
    transform(value: any, args1: any): any {
      let sortedArray = value.sort(function(a, b) {
         return b.args1.valueOf() - a.args1.valueOf();         
      });
      return value = sortedArray;
    }

//     propComparatorAZ(prop) {
//     return function(a, b) {
//         if (a[prop] < b[prop]) {
//             return -1;
//         }
//         if (a[prop] > b[prop]) {
//             return 1;
//         }
//         return 0;
//     }
//   }
  
//     transform(value: any, args1: any): any {
//       return value.sort(this.propComparatorAZ('args1'));
// };
}
