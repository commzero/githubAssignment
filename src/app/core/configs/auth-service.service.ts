import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (sessionStorage.getItem('username') === 'test') {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
