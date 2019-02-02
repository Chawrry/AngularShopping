import { Component, OnInit, Input } from '@angular/core';
import {Items} from '../app.component';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() items: Items[];
  @Input() currentPage: number;
  @Input() pageSize: number;
  constructor(private comService: CommonService) { console.log('items crreate'); }

  ngOnInit() {
    console.log('items init');
  }

  putIntoCar(item) {
    const shoppingCar = this.comService.shoppingCarItems;
    if (shoppingCar.indexOf(item) >= 0) {
      shoppingCar.map( data => {
        if (data.id === item.id) {
          data.count ++;
        }
      });
    } else {
      shoppingCar.unshift(item);
    }
    this.comService.sum += item.price;
  }
}
console.log('items ok-');
