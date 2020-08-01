import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngsm-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent implements OnInit {

  productSlides = [
    {
      "info": "Google Pixel",
      "url": "../../../../assets/phones/google/pixel3_xl_fl.jpeg",
      "price": 80000
    },
    {
      "info": "Apple",
      "url": "../../../../assets/phones/iphone/iphone_7.jpeg",
      "price": 23000
    },
    {
      "info": "Nokia",
      "url" : "../../../../assets/phones/nokia/nokia_6.1_plus_fl.jpeg",
      "price": 30000
    },
    {
      "info" : "Redmi",
      "url" : "../../../../assets/phones/redmi/redmi_note_6_pro_fl.jpeg",
      "price": 15000

    },
    {
      "info":"One Plus",
      "url": "../../../../assets/phones/oneplus/oneplus_5_fl.jpeg",
      "price": 32000
    },
    {
      "info":"Lenovo",
      "url":"../../../../assets/phones/lenovo/lenovo_a5_fl.jpeg",
      "price": 20000
    }
   

  ]

  constructor() { }

  ngOnInit() {
  }

}
