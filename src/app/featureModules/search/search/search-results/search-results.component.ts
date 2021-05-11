import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {

  @Input() results: Object[] = [];

  @Input() type: string = '';

  dataSize: number = 9;

  constructor() { }

  ngOnChanges() {
    console.log(this.results);
    this.dataSize = 9;
  }

  onLoadMoreData() {
    this.dataSize += 9;
  }

  onVisitLink(url) {
    window.open(
      url,
      '_blank'
    );
  }

}
