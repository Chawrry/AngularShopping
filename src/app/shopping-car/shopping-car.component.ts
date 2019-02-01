import { Component, OnInit, Input } from '@angular/core';
import {Items} from '../app.component';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {
  @Input() items: Items[];
  constructor() { }

  ngOnInit() {
  }

}
