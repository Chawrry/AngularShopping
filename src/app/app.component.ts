import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular一定要來一下的商城';
  items: Items[] = [];
  currentPage = 0;
  pageSize = 10;
  searchWords = '';

  constructor(private http: HttpClient, private comService: CommonService) { console.log('app crreate'); }

  ngOnInit() {
    console.log('app init');
    this.http.get('/assets/pros-list.json')
    .subscribe( (data: Items[]) => {
      data.map(_data => _data.count = 1);
      this.items = data ;
    });
  }

  filterSearchWords(words: string) {
    this.searchWords = words;
  }
}
console.log('app ok');
export interface Items {
  id: string;
  index: number;
  name: string;
  info: string;
  price: number;
  type: string;
  picture: string;
  count: number;
}