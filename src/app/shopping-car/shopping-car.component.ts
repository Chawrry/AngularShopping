import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {

  constructor(private comService: CommonService) { }

  ngOnInit() {
  }

  addItemCount(item) {
    this.comService.shoppingCarItems.map( data => {
      if (data.id === item.id) {
        data.count++;
        this.comService.sum += item.price;
      }
    });
  }

  subItemCount(item) {
    if (item.count === 1) {
      this.comService.shoppingCarItems.splice(this.comService.shoppingCarItems.indexOf(item), 1);
    } else {
      this.comService.shoppingCarItems.map( data => {
        if (data.id === item.id ) {
          data.count--;
        }
      });
    }
    this.comService.sum -= item.price;
  }
}
