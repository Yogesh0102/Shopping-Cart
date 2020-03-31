import { Component, OnInit } from '@angular/core';
import { GetUserService } from '../get-user.service';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor( private service1 : GetUserService ,private service : GetDataService , private route : ActivatedRoute , private router : Router) { }
  USER;
  role="user";
  DATA;
  ID;
  ngOnInit() {

    let user = sessionStorage.getItem('username');
    this.service1.get1_user(user).subscribe( role1 => {
     this.USER=role1;
     this.role = this.USER.role;
    if(this.role != "Admin")
    {
    alert("You are NOT a authorised admin ");
    }
  })

    this.route.queryParams.subscribe ( param =>{
      this.ID = param.id;
        })
    this.service.get_id(this.ID).subscribe( data => {
      this.DATA=data;
    }) 
   
} 

onsubmit()
{
  this.service.put_item(this.DATA).subscribe( data=> {
   console.log(data);
  })
}
}