import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular一定要來一下的商城';
  items: Items[];
  currentPage = 0;
  pageSize = 3;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('app init');
    this.http.get('/assets/pros-list.json')
    .subscribe( (data: Items[]) => this.items = data );
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
}
