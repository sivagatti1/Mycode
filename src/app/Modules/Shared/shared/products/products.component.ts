import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  @Input() productitems:any;
  addtocart(item){
    
    this.api.cartlist(item)
  }
}
