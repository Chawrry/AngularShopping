import { Component, OnInit, Input } from '@angular/core';
import {Items} from '../app.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() items: Items[];
  @Input() currentPage: number;
  @Input() pageSize: number;
  constructor() { }

  ngOnInit() {
    console.log('items init');
  }

  putIntoCar(item: Items) {
    this.items = this.items.filter( data => data.id !== item.id);
  }
}
