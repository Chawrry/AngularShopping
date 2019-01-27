import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Items} from '../app.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @Input() items: Items[];
  @Input() currentPage: number;
  @Input() pageSize: number;
  @Output() currentPageChange = new EventEmitter<number>();
  paggings;
  pageSet = 0;
  onClickEvent = false;
  constructor() {
    console.log('pages create');
   }

  ngOnInit() {
    console.log('pages init');
    this.paggings = new Array(this.pageSize);
  }

  clickPage(idx) {
    this.currentPage = this.pageSet * this.pageSize + idx;
    this.currentPageChange.emit(this.currentPage);
  }

  isClick(idx) {
    return this.currentPage % this.pageSize === idx;
  }

  prePage() {
    if (this.currentPage === 0) {
      return;
    }
    if (this.currentPage % this.pageSize === 0) {
      this.pageSet --;
    }
    this.currentPageChange.emit(this.currentPage - 1 );
  }

  nextPage() {
    if (this.currentPage === Math.ceil(this.items.length / this.pageSize) - 1) {
      return;
    }
    if (this.currentPage % this.pageSize === 2) {
      this.pageSet ++;
    }
    this.currentPageChange.emit(this.currentPage + 1 );
  }

  inThePageEnd() {
    // return this.currentPage === Math.ceil(this.items.length / this.pageSize) - 1;
  }
}
