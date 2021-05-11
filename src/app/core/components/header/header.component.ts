import { Component } from '@angular/core';
import { LoginService } from '../../configs/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private loginService: LoginService
  ) { }

  onLogout() {
    this.loginService.logout();
  }
}
