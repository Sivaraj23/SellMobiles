import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngsm-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit {

  constructor() { }
  actseller: boolean = false;
  actdashboard: boolean = true;
  actreview: boolean = false;
  actcustomer: boolean = false;
  
  dashboard_css() {
    this.actdashboard = true;
    this.actcustomer = false;
    this.actreview = false;
    this.actseller = false;
  }
  sellers_css(){
    this.actdashboard = false;
    this.actcustomer = false;
    this.actreview = false;
    this.actseller = true;
  }
  customers_css(){
    this.actdashboard = false;
    this.actcustomer = true;
    this.actreview = false;
    this.actseller = false;
  }
  reviews_css(){
    this.actdashboard = false;
    this.actcustomer = false;
    this.actreview = true;
    this.actseller = false;
  }



  ngOnInit() {
  }

}
