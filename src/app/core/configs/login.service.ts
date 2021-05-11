import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router
  ) { }

  isLoggedIn() {
    if (sessionStorage.getItem('username') === 'test') {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  login(username) {
    sessionStorage.setItem('username', username);
    this.router.navigate(['/']);
  }
}
