import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
cart=new Subject();
cartlistitmes:any=[]
  constructor() { }
  cartlist(item){
    console.log(item);
this.cart.next(item);
this.cartlistitmes.push(item)


  }
  getcartlist(){
    return this.cart.asObservable()
      }
}
