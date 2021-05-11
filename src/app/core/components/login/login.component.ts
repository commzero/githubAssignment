import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../configs/login.service';
import { LoginModel } from '../../models/login-enum.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { StateService } from '../../configs/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj = LoginModel;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private state: StateService,
    private loginService: LoginService
  ) {
    this.state.updateCondition('hide');
  }

  ngOnInit() {
    this.checkLogin();
  }

  onLogin() {
    if (this.loginObj.username === 'test') {
      this.loginService.login(this.loginObj.username);
      this.snackBar.open(`Hello ${this.loginObj.username}!`, 'Hi', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2500
      });
    }
  }

  checkLogin() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

}
