import { Component, OnInit } from '@angular/core';
import { ApiService } from './Modules/Shared/shared/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private api:ApiService){}
  cartlist=[];
  panelOpenState = false;
  ngOnInit(){
    this.api.getcartlist().subscribe(data=>{
this.cartlist.push(data)
    })
  }
}

