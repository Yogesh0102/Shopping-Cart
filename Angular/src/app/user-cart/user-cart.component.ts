import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  cart;
  cash=0;
  empty = false;
  constructor( private service : GetDataService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit() {
    this.service.getcart().subscribe( data => {
      this.cart=data;
      if ( this.cart.length == 0)
      this.empty = false;
      else
      {
        this.empty = true;
      for( let i=0 ; i <this.cart.length ;i++)
      {
        this.cash= this.cash + (this.cart[i].item.price * this.cart[i].quantity );
      }
    }
    })
  }
  increase(id)
 {
   this.service.increase1(id).subscribe( data => {
     this.ngOnInit();
   })
 }

 decrease(id)
 {
   this.service.decrease1(id).subscribe( data => {
   })
   this.ngOnInit();
 }

 remove(id)
 {
   this.service.remove1(id).subscribe( data => {
     this.ngOnInit();
   })
 }

 place()
 {
   this.service.checkout().subscribe( data => {
    this.ngOnInit();
   })
 }

 clear()
 {
  this.service.clear().subscribe( data => {
    this.ngOnInit();
  })
 }

 Return_Empty()
 {
   return this.empty;
 }

 toHome()
 {
   location.assign('/home');
 }

 details(id)
 {
   this.router.navigate(['/product-details'] , { queryParams : {id : id }});
 }
}