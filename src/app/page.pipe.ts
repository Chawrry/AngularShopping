import { Pipe, PipeTransform } from '@angular/core';
import { Items } from './app.component';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(items: Items[], currentPage: number, pageSize: number): any {
    console.log('pipe ok');
    console.log('currentPage ' + currentPage + ' pageSize ' + pageSize );
    if (items) {
      console.log('pipe in');
      return items.filter( data => items.indexOf(data) >= currentPage * pageSize &&
        items.indexOf(data) < (currentPage + 1) * pageSize);
    }
  }

}
