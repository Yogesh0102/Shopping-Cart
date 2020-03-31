import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Data;
  SEARCH = "";
  constructor(private router : Router , private service : GetDataService) {
    
   }

  ngOnInit() {
  this.service.get1().subscribe( (data1 ) => {
    this.Data=data1;
  } )
  }

  goTo(cate)
  {    
      this.router.navigate(['/product-list'] , { queryParams : {cat : cate }});
  }

  search()
  {
     this.router.navigate(['/product-list'] , { queryParams : {d : this.SEARCH }})
  }
}