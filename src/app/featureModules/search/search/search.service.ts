import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getSearchResults(source, searchKey) {
    return this.http.get(environment.apiKey + `${source}?q=${searchKey}`);
  }

}