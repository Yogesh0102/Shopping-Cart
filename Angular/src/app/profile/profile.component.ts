import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service : GetDataService , private route : ActivatedRoute , private router : Router) { }
  user1;
  Myorder;
  Date;
  Role;
  ngOnInit() {
    this.service.gethistory().subscribe ( data => {
      this.Myorder = data;
      this.Role = this.Myorder[1].user.role;
      console.log(this.Role);
      sessionStorage.setItem('Role',this.Role);
    })
    let user = sessionStorage.getItem('username')
    this.user1=user;
 
  }

  edituser()
  {
    this.router.navigate(['/edit-profile'] , { queryParams : {user : this.user1 }});
  }

  isadmin()
  {
    if(this.Role =="Admin")
     return true;
     else
     return false;
  }

  addproduct()
  {
    location.assign('/add-product');
  }

  editproduct()
  {
    location.assign('/edit-product');
  }
}