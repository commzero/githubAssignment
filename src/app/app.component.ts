import { Component } from '@angular/core';
import { StateService } from './core/configs/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  hide: string = '';

  constructor(
    private state: StateService
  ) {
    this.getCompName();
  }

  getCompName() {
    this.state.getCondition().subscribe(hideCondition => {
      this.hide = hideCondition;
    });
  }

}
