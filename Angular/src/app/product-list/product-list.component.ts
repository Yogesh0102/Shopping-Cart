import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { GetUserService } from '../get-user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Data;
  Data_cat;
  cate = "undo";
  first;
  last;
  sub1;

  price1 = { "first" : "" , "last" : "" };
  sub_cate1 = "";
  constructor(private route : ActivatedRoute , private service : GetDataService , private router : Router , private service1 : GetUserService) {
    
   }
   
   prices = [
      { "first" : 0 , "last" : 1999},
      { "first" : 2000 , "last" : 4999},
      { "first" : 5000 , "last" : 8999},
      { "first" : 9000 , "last" : 12999},
      { "first" : 13000 , "last" : 15999},
      { "first" : 16000 , "last" : 19999},
      { "first" : 20000 , "last" : 1000000}
   ];

   sub = [
    'T-shirt',
    'Jeans',
    'Shoes',
    'Phone',
    'Headphones',
    'Cricket',
    'Football',
    'Badminton'
   ]

   ROLE;
   SEARCH = "";

  ngOnInit() {
  
    this.route.queryParams.subscribe ( param =>{
      this.cate = param.cat;
      if(!(typeof(param.d)  === 'undefined'))
       {
         this.SEARCH=param.d;
     
         console.log(this.SEARCH);
         this.search();
       }
      
      else {
    this.service.get_cat(this.cate).subscribe( (data1 ) => {
      this.Data=data1;
          }) 
        }
        })
      
          let user = sessionStorage.getItem('username');
          this.service1.get1_user(user).subscribe ( data => {
            this.ROLE=data;
            console.log(this.ROLE);
          })  
   
}

  goToDetails(id1)
  {
      this.router.navigate(['/product-details'] , { queryParams : {key : id1 }});
  }

  get_cate1(category)
  {
    this.service.get_cat(category).subscribe( (data2) => {
      this.Data = data2;
    })
  }

  goTo(cate)
  {    
      this.router.navigate(['/product-list'] , { queryParams : {cat : cate }});
  }

  clear()
  {
    this.get_cate1(this.cate);
    this.ngOnInit();
  }

  submitfilter1($event,s)
  {
    this.sub_cate1=s;
    if(this.price1.first == "")
    {
       this.service.getsub(this.cate,this.sub_cate1).subscribe( data => {
         this.Data=data;
       })
    }
    else
    {
      this.service.get_sub_price(this.cate,this.sub_cate1,this.price1.first,this.price1.last).subscribe( data => {
        this.Data=data;        
      })
    }
  }
  submitfilter2($event,first,last)
  {
    this.price1.first=first;
    this.price1.last=last;
    if(this.sub_cate1 == "")
       {
         this.service.getprice(this.cate,this.price1.first,this.price1.last).subscribe( data => {
           this.Data=data;
         })
       }
    else
    {
      this.service.get_sub_price(this.cate,this.sub_cate1,this.price1.first,this.price1.last).subscribe( data => {
        this.Data=data;        
      })
    }   
    
  }

  add(id)
  {
      this.service.addto(id).subscribe( data => {
      location.assign('/user-cart');
    })
  }

  editproduct(id)
  {
    this.router.navigate(['/edit-product'] , { queryParams : {id : id }});
  }
 isAdmin()
 {
   if( this.ROLE== "Admin")
    return true;
   else
    return false; 
 }

 search()
 {
    this.service.get_search(this.SEARCH).subscribe( (data2) => {
      this.Data = data2;
  })
 }
}