import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  hideHeaderFooter = new BehaviorSubject('show');

  constructor() { }

  updateCondition(name) {
    this.hideHeaderFooter.next(name);
  }

  getCondition(): Observable<any> {
    return this.hideHeaderFooter.asObservable();
  }
}
