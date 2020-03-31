import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetDataService 
{

  constructor(private http : HttpClient) { 

  }

  get1(){
    
    return this.http.get('http://localhost:8081/getPro');
  }

  get_search(SEARCH)
  {
    return this.http.get('http://localhost:8081/search/'+SEARCH);
  }

  getsub(cate,sub)
  {
    return this.http.get('http://localhost:8081/'+cate+'/'+sub);
  }

  getprice(cate,first,last)
  {
    return this.http.get('http://localhost:8081/'+cate+'/'+first+'/'+last);
  }

  get_sub_price(cate,sub,first,last)
  {
    return this.http.get('http://localhost:8081/sub/'+cate+'/'+sub+'/'+first+'/'+last);
  }

  get_cat(cate)
  {
    return this.http.get('http://localhost:8081/get_cate/'+cate);
  }
  
  addto(id)
  {
    return this.http.get('http://localhost:8081/cart/addtocart?key='+id);
  }

  getcart()
  {
    return this.http.get('http://localhost:8081/cart/showcart');
  }

  increase1(id)
  {
    return this.http.get('http://localhost:8081/cart/addtocart/'+id);
  }

  decrease1(id)
  {
    return this.http.get('http://localhost:8081/cart/removefromcart/'+id);
  }

  remove1(id)
  {
    return this.http.get('http://localhost:8081/cart/remove1fromcart/'+id);
  }

  checkout()
  {
    return this.http.get('http://localhost:8081/cart/checkout');
  }

  clear()
  {
    return this.http.get('http://localhost:8081/cart/clearcart');
  }

  gethistory()
  {
    return this.http.get('http://localhost:8081/cart/history');
  }

  post_item(item)
  {
    return this.http.post<any>('http://localhost:8081/post1' , item , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }

  get_id(pkey)
  {
  
     return this.http.get('http://localhost:8081/get2?key='+pkey);
  }

  put_item(item)
  {
    return this.http.post<any>('http://localhost:8081/put1' , item , { headers : new HttpHeaders( { 'Content-Type' : 'application/json' } )});
  }
}