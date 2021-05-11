import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { StateService } from 'src/app/core/configs/state.service';
import { SearchService } from './search.service';
import { debounceTime, map, distinctUntilChanged, filter } from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchValue: string = '';

  selectedValue: string = 'users';

  isSearching: boolean = false;

  showCard: boolean = false;

  searchTypes: Object[] = [
    { key: 'Repositories', value: 'repositories' },
    { key: 'Users', value: 'users' },
  ];

  searchResults: Object[] = [];

  errorHappened: boolean = false;

  errorMessage: string = '';

  searchSubscription: Subscription;

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(
    private searchService: SearchService,
    private state: StateService
  ) { }

  ngOnInit() {
    this.state.updateCondition('show');
  }

  triggerSearchAction() {
    this.searchSubscription = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      }),
      filter(res => res.length > 2),
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((text: string) => {
      this.isSearching = true;
      this.showCard = true;
      this.searchResults = [];
      this.onSearch();
    });
  }

  onSearch() {
    this.searchService.getSearchResults(this.selectedValue, this.searchValue)
      .subscribe((results: Object[]) => {
        this.searchResults = results;
        console.log(this.searchResults);
        this.isSearching = false;
        this.errorHappened = false;
      }, error => {
        console.log(error);
        switch (error.status) {
          case 400:
            this.errorMessage = 'Invalid data, please write only English Letters!';
            break;
          case 404:
            this.errorMessage = 'No Data Available please try again!';
            break;
          case 403:
            this.errorMessage = error.error.message;
            break;
          case 500:
            this.errorMessage = 'Error Happened, please try again';
            break;
          case 0:
            this.errorMessage = 'Connection error, please check your connection & try again';
            break;
        }
        this.searchResults = [];
        this.showCard = false;
        this.isSearching = false;
        this.errorHappened = true;
      });
  }

  onSelectType() {
    this.showCard = false;
    const searchElement = document.getElementById('search');
    searchElement.dispatchEvent(new KeyboardEvent('keyup', { 'key': ' ' }));
  }

  onLoadMore() {

  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

}
