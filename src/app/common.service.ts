import { Injectable } from '@angular/core';
import { Items } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  searchWords = '';
  shoppingCarItems: Items[] = [];
  sum = 0;

  constructor() { console.log('service crreate'); }
}
console.log('service ok');

