import { Pipe, PipeTransform } from '@angular/core';
import {Items} from './app.component';

@Pipe({
  name: 'page'
})
export class PagePipe implements PipeTransform {

  transform(items: Items[], currentPage: number, pageSize: number, searchWords: string): any {
    console.log('pipe trans');
    console.log('currentPage ' + currentPage + ' pageSize ' + pageSize );
    let _items;
    if (searchWords) {
      console.log(searchWords);
      _items = items.filter( data => data.info.indexOf(searchWords) > 0 || data.name.indexOf(searchWords)  > 0
      || data.type.indexOf(searchWords) > 0);
      console.log(_items);
    } else {
      _items = items;
    }
    if (_items) {
      return _items.filter( data => _items.indexOf(data) >= currentPage * pageSize &&
      _items.indexOf(data) < (currentPage + 1) * pageSize);
    }
  }

}
console.log('pipe ok');