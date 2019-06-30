import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUser(userid, password) {
    if (userid === 'admin' && password === 'admin') {

      localStorage.setItem('isloggedin', 'true');
    } else {
      localStorage.setItem('isloggedin', 'false');
    }
  }

}
