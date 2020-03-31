import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  ID;
  DATA : any;
  data2;
  constructor(private route : ActivatedRoute , private service : GetDataService , private router : Router) { }

  ngOnInit() {
 
      this.route.queryParams.subscribe ( param =>{
        this.ID = param.key;//changes of id to key
          })
          console.log(this.ID);
   
      this.service.get_id(this.ID).subscribe( data => {
        this.data2=data;
      })
  
  }

  goTo(cate)
  {    
      this.router.navigate(['/product-list'] , { queryParams : {cat : cate }});
  }

  add(id)
  {
    console.log(id);
    this.service.addto(id).subscribe( data => {
      console.log(data);
      location.assign('/user-cart');
    })
  }
}