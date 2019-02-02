import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../app.component';
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
  constructor(private comService: CommonService) {
    console.log('items crreate');
  }

  ngOnInit() {
    console.log('items init');
  }

  putIntoCar(item) {
    const shoppingCar = this.comService.shoppingCarItems;
    if (shoppingCar.indexOf(item) >= 0) {
      // 一樣的問題，Array map 用法有問題，請重新看 MDN 關於 Array Map 的用法
      shoppingCar.map(data => {
        if (data.id === item.id) {
          data.count++;
        }
      });
    } else {
      shoppingCar.unshift(item);
    }
    this.comService.sum += item.price;
  }
}
console.log('items ok-');
