import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginsvc: LoginService, private route: Router) { }

  ngOnInit() {
  }
  login() {
    if (this.username != null && this.password != null) {
      this.loginsvc.loginUser(this.username, this.password);
      this.route.navigate(['/dashboard']);
    } else {
      alert('userid/password required');
    }


  }
}
