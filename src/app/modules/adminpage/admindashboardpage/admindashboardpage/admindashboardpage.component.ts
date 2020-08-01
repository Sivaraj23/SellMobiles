import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AdmindashboardService } from "src/app/shared/services/admindashboard/admindashboard.service";
import { UsetoastrService } from "../../../../shared/services/toastrservice/usetoastr.service";
import { LoaderService } from "src/app/shared/services/loaderservice/loader.service";
import { Router } from '@angular/router';

@Component({
  selector: 'adminpage-admindashboardpage',
  templateUrl: './admindashboardpage.component.html',
  styleUrls: ['./admindashboardpage.component.css']
})
export class AdmindashboardpageComponent implements OnInit {

  Idata=[];
  isloadingData:boolean=false;
  

  public sellerChartData: Array<any> = [
    5, 34,90
  
  ];
  public userChartData: Array<any> = [

  ];
  public reviewsChartData: Array<any> = [
   20,5, 14, 9

  ];
  public somethingChartData: Array<any> = [
    5, 34, 90

  ];


  //labels
  public userChartLabels: Array<any> = [];
  public sellerChartLabels: Array<any> = ['buyer', 'seller', 'admin'];
  public reviewsChartLabels: Array<any> = ['best','good', 'bad', 'worst'];
  public somethingChartLabels: Array<any> = ['buyer', 'seller', 'admin'];
  //responsive
  public lineChartOptions: any = {
    responsive: true
  };


userchartcolors=['blue', 'yellow', 'green', 'orange'];
  //colors
  public userChartColors: Array<any> = [


    { // grey
      backgroundColor:this.userchartcolors ,
      borderColor: '#ffffff',
      pointBackgroundColor: '#000000',
      pointBorderColor: '#f0f0f0',
      pointHoverBackgroundColor: '#0f0f0f',
      pointHoverBorderColor: '#ffffff'
    }
    // ,
    // { // dark grey
    //   backgroundColor: '#00ff00',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // }
  ];



 sellerchartcolors=['grey', 'blue', 'red', 'orange'];
  public sellerChartColors: Array<any> = [


    { // grey
      backgroundColor: this.sellerchartcolors,
      borderColor: '#ffffff',
      pointBackgroundColor: '#00ffff',
      pointBorderColor: '#f0f0f0',
      pointHoverBackgroundColor: '#0f0f0f',
      pointHoverBorderColor: '#ffffff'
    }

  ];


  reviewschartcolors= ['orange', 'blue', 'grey', 'red'];
  public reviewsChartColors: Array<any> = [


    { // grey
      backgroundColor:this.reviewschartcolors,
      borderColor: '#ffffff',
      pointBackgroundColor: '#00ffff',
      pointBorderColor: '#f0f0f0',
      pointHoverBackgroundColor: '#ff0000',
      pointHoverBorderColor: '#ffffff'
    }

  ];

  somethingchartcolors= ['orange', 'grey', 'blue', 'red'];
  public somethingChartColors: Array<any> = [


    { // grey
      backgroundColor:this.somethingchartcolors,
      borderColor: '#ffffff',
      pointBackgroundColor: '#00ffff',
      pointBorderColor: '#f0f0f0',
      pointHoverBackgroundColor: '#0f0f0f',
      pointHoverBorderColor: '#ffffff'
    }

  ];



  //chart legend
  public userChartLegend: boolean = true;
  public sellerChartLegend: boolean = true;
  public reviewsChartLegend: boolean = true;
  public somethingChartLegend: boolean = true;


  //chart type
  public sellerChartType: string = 'pie';
  public userChartType: string = 'pie';
  public reviewsChartType: string = 'pie';
  public somethingChartType: string = 'doughnut';







  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



  constructor(private admindashboardserv: AdmindashboardService, private toastr: UsetoastrService,private load:LoaderService,
              private router:Router) { }

 
  // boolspin:boolean=false;


  ngOnInit() {
    if(localStorage.getItem('roleid')=='3'){
    this.isloadingData=true;
    this.load.showProgBar();


    //read data from backend through service
    this.admindashboardserv.getUsersCountByRole().subscribe(
      inputdata => {

        

        console.log(inputdata.body);

        this.Idata = inputdata.body.values;
        // setTimeout(() => this.toastr.success(this.Idata+""));
        this.userChartData=this.Idata;

        this.Idata = inputdata.body.labels;
        // setTimeout(() => this.toastr.success(this.Idata+""));
        this.userChartLabels=this.Idata;
        this.isloadingData=false;
        this.load.hideProgBar();
      },error=>{
        this.isloadingData=false;
        this.load.hideProgBar();
        console.log(error);
      }
    );
    }
    else{
      this.toastr.warning("Unauthorized access to admin");
      this.router.navigateByUrl("/home");
    }

  }

}
