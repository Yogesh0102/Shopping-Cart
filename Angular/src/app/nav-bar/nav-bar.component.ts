import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user1;
  constructor(private auth : AuthService) {
  }
 ngOnInit() {

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }
  isUserLoggedIn1() {
    let user = sessionStorage.getItem('username')
    this.user1=user;
    return !(user === null)
  }

}
