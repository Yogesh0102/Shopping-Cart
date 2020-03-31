import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserService } from '../get-user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false;

  constructor(private router : Router ,private service : GetUserService , private auth : AuthService) { }

  DATA : any;

  ngOnInit() {
    sessionStorage.removeItem('username')
  }

  check_login(username,password) {

    (this.auth.authenticate(username,password).subscribe(
      data => {
        this.router.navigate(['/home'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );
  }

  Sign()
  {
    location.assign('/sign-up');
  }
}