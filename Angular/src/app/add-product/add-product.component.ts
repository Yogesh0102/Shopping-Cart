import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
import { GetDataService } from '../get-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { item } from '../items';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service1 : GetUserService ,private service : GetDataService , private router : Router , private route : ActivatedRoute ) { }
  USER;
  role="user";
  ITEM = new item("","","",0,"","",0,0);
  ngOnInit() {
    let user = sessionStorage.getItem('username');
    console.log(user);
    this.service1.get1_user(user).subscribe( role1 => {
     this.USER=role1;
     this.role = this.USER.role;
     console.log(this.role);
    if(this.role != "Admin")
    {
    alert("You are NOT a authorised admin ");
    }
  })
  }
  
  onsubmit()
  {
    this.service.post_item(this.ITEM).subscribe( data => {
      console.log(data);
    })
  }
}