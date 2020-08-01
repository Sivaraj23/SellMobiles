import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from "src/app/shared/services/admindashboard/admindashboard.service";
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { UsetoastrService } from "../../../../shared/services/toastrservice/usetoastr.service";


@Component({
  selector: 'adminpage-admincustomerspage',
  templateUrl: './admincustomerspage.component.html',
  styleUrls: ['./admincustomerspage.component.css']
})
export class AdmincustomerspageComponent implements OnInit {
  loadChart:boolean=false;
  public monthChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public monthChartData: Array<any> = [{data:[65, 59, 80, 81, 56, 55, 40,28, 48, 40, 19, 86, 27, 90],label:'based on months'}];


  public monthChartLabels: Array<any> = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];
  public monthChartColors: Array<any> = [
        {
          backgroundColor: ['orange', 'blue', 'grey', 'red','Maroon','Green','Yellow','Lime','pink','Aqua','Olive','PeachPuff'],
          borderColor: '#ffffff',
          pointBackgroundColor: '#00ffff',
          pointBorderColor: '#f0f0f0',
          pointHoverBackgroundColor: '#ff0000',
          pointHoverBorderColor: '#ffffff'
        }
    
      ];
 public monthChartType: string = 'bar';
 public monthChartLegend: boolean = true;




  pieChartLabels:string[];
  pieChartData:number[];
  pieChartType:string;
    showChart:boolean=false;
    i:number; 
    len: any=0;
    

  constructor(private service:AdmindashboardService,private toaster: UsetoastrService) { }
  map:any=[];
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  public pieChartColors:Array<any>=[
    {   
         backgroundColor: ['MistyRose','Blue','yellow','red','blue','Gray',
                          ' Black',' Green','pink','Yellow','Olive','Lime',
                           'orange','Fuchsia','Red','Blue','DarkSalmon','blue','Gold','PeachPuff','MediumOrchid'],

        borderColor: '#ffffff',
       pointBackgroundColor: '#000000',
        pointBorderColor: '#f0f0f0',
        pointHoverBackgroundColor: '#0f0f0f',
        pointHoverBorderColor: '#ffffff'
       }
    ];

    public pieChartLegend: boolean = true;
    

  ngOnInit() {
    
   this.showChart=false;
    this.len = 0;
    
    this.map=[];
   // setTimeout(() => this.toaster.success('Connecton Establishing!..'));
    
    this.service.getUsersCountByState().subscribe(data=>{
      this.map=data.body;
      this.pieChartData = [];
      this.pieChartLabels = [];
      this.pieChartType = 'pie';
      this.showChart=true;
     
       console.log(this.map);
      for(let i = 0;i < this.map.length; i = i +1){
        console.log(this.map[i].no);
        this.loadChart=true;
        this.pieChartData.push(this.map[i].no);
        this.pieChartLabels.push(this.map[i].state);
      }
     
     // console.log(this.pieChartData);
      //console.log(this.pieChartLabels);
      
      
    }
    )


  }
  ngAfterViewInit(): void {
    
        setTimeout(() => this.toaster.success("Data Fetching Successful!.."));
    
      }
    
}
