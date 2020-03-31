import { Component, OnInit } from '@angular/core';
import { posts } from '../posts';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  DATA : any;
  post1 = new posts("" , "" , "");

  constructor( private service : GetUserService ) { }

  ngOnInit() {
  }

  Onsubmit()
  {
    this.service.post1_user(this.post1).subscribe(
      data => console.log("SUCCESS" , data) ,
      error => console.log("ERROR" , error)
    )
    location.assign('/login');
  }
}