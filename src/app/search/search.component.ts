import { Component, OnInit, Input} from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchWords: string;
  constructor(private comService: CommonService) { }

  ngOnInit() {
  }

  filterSearchWords(words) {
    this.comService.searchWords = words.value;
  }

}
