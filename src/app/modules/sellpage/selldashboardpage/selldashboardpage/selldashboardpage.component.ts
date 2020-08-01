import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from "src/app/shared/services/admindashboard/admindashboard.service";
import { LoginService } from '../../../../shared/services/loginservice/login.service';
import { SelldashboardService } from "src/app/shared/services/selldashboard/selldashboard.service";
import { Router } from '@angular/router';
// import { SellersidebarComponent } from "../../sellersidebar/sellersidebar.component";

@Component({
  selector: 'ngsm-selldashboardpage',
  templateUrl: './selldashboardpage.component.html',
  styleUrls: ['./selldashboardpage.component.css']
})
export class SelldashboardpageComponent implements OnInit {
  pieChartLabels: string[];
  pieChartData: number[];
  pieChartType: string;
  show: boolean;
  len: any = 0;
  map: any = [];
  userid: any;
  role:string;
  brandSizeItr: any = [];

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
  public pieColors: Array<any> = [
    {    // dark grey
      backgroundColor: ['burlywood', 'limegreen', 'yellow', 'black', 'red', 'blue', 'darkslategray'
        , 'PeachPuff', 'Olive', 'Lime',
        'Green', 'Fuchsia', 'orange', 'Gold', 'DarkSalmon', 'RosyBrown', 'Maroon', 'PeachPuff'],
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];

  constructor(private serv: SelldashboardService, private router:Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('userid'));
    this.userid = localStorage.getItem('userid');
    this.len = 0;
    this.show = false;
    this.map = [];


    this.role=localStorage.getItem('roleid')+'';
    if(this.role=='1'){
      alert("You are not authorized to access the sell page");
      this.router.navigateByUrl("sellerapproval");
      // this.router.navigateByUrl("/sellersignup");
    }
    if(this.role=='2'){
    this.serv.getSellerOrderByBrand(this.userid).subscribe(
      inputdata => {
        this.map = inputdata.body;
        console.log(inputdata.body.keyset);
        console.log(inputdata.body.values);

        this.pieChartData = [];
        this.pieChartLabels = [];
        this.pieChartType = 'pie';
        this.show = true;
        this.pieChartData = this.map.values;
        this.pieChartLabels = this.map.keyset;
        console.log(inputdata);

        for (let i in this.pieChartData) {
          this.brandSizeItr.push(i);
        }
        console.log(this.brandSizeItr);

      }, error => {
        console.log(error);
      }

    );
    }
  }

}
