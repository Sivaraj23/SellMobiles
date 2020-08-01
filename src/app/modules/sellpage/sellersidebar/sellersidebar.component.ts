import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngsm-sellersidebar',
  templateUrl: './sellersidebar.component.html',
  styleUrls: ['./sellersidebar.component.css']
})
export class SellersidebarComponent implements OnInit {

  constructor() { }

  actdashboard: boolean = false;
  actorders: boolean = false;
  actproducts: boolean = false;
  actsales: boolean = false;

  dashboard_css() {
    this.actdashboard = true;
    this.actorders = false;
    this.actproducts = false;
    this.actsales = false;
  }

  orders_css() {
    this.actdashboard = false;
    this.actorders = true;
    this.actproducts =  false;
    this.actsales =  false;
  }

  products_css() {
    this.actdashboard = false;
    this.actorders = false;
    this.actproducts =  true;
    this.actsales =  false;
  }

  sales_css() {
    this.actdashboard = false;
    this.actorders = false;
    this.actproducts = false;
    this.actsales = true 
  }

  ngOnInit() {
  }

}
