import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Modules/Shared/shared/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private api:ApiService) { }
cartlist:any=[]
  ngOnInit(): void {
    this.cartlist=this.api.cartlistitmes
    
  }

}
