import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tvs=[
    {"imgsrc":"https://rukminim1.flixcart.com/image/612/612/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70",
  "price":100,
  'quantity':10},
  {"imgsrc":"https://rukminim1.flixcart.com/image/832/832/kesv0y80/mobile/h/p/q/redmi-9i-mzb0814in-original-imafvehkgzghyqtp.jpeg?q=70",
  "price":100,
  'quantity':10},
  {"imgsrc":"https://rukminim1.flixcart.com/image/832/832/kbs9k7k0/television/c/j/3/samsung-ua32t4340akxxl-original-imaft25qdysfsq7k.jpeg?q=70",
  "price":100,
  'quantity':10},
  {"imgsrc":"https://rukminim1.flixcart.com/image/612/612/k51cpe80pkrrdj/headphone-refurbished/y/b/c/c-rockerz-on-ear-510-boat-original-imafn6u7ec8cmk8y.jpeg?q=70",
  "price":100,
  'quantity':10}
  ]

}
