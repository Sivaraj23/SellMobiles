import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'homepage-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  logoSlides = [
    {
      "info": "Samsung",
      "url": "../../../../assets/brands/samsung_fl.jpg",
    },
    {
      "info": "Apple",
      "url": "../../../../assets/brands/apple_fl.jpg",
    },
    {
      "info": "Nokia",
      "url" : "../../../../assets/brands/nokia2.jpg"
    },
    {
      "info" : "Redmi",
      "url" : "../../../../assets/brands/redmi_fl.jpg"
    },
    {
      "info":"One Plus",
      "url": "../../../../assets/brands/oneplus.png",
    },
    {
      "info":"Lenovo",
      "url":"../../../../assets/brands/lenovo.jpg"
    }
   

  ]
  

  constructor() { }

  ngOnInit() {

  }
}
