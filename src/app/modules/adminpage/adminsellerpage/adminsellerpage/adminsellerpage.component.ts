import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from "src/app/shared/services/admindashboard/admindashboard.service";
import { ChartsModule as Ng2Charts } from 'ng2-charts';
// import { NgxUiLoaderService } from 'ngx-ui-loader';


@Component({
  selector: 'adminpage-adminsellerpage',
  templateUrl: './adminsellerpage.component.html',
  styleUrls: ['./adminsellerpage.component.css']
})
export class AdminsellerpageComponent implements OnInit {
  doughnutChartLabels:string[];
  doughnutChartData:number[];
  doughnutChartType:string;
    show:boolean=true;
    i:number;
    len: any=0;
   
  constructor(private serv:AdmindashboardService) { }
  map:any=[];
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
public doughnutColors:Array<any>=[
  {    // dark grey
       backgroundColor: ['MistyRose','pink','yellow','red','blue','Gray',
                        ' Black',' Red','Maroon','Yellow','Olive','Lime',
                         'Green','Fuchsia','orange','Aqua','DarkSalmon','RosyBrown','Gold','PeachPuff','MediumOrchid'],
      
      
       
       
      
 
       borderColor: '#F97300',
       pointBackgroundColor: 'rgba(77,83,96,1)',
       pointBorderColor: '#fff',
       pointHoverBorderColor: 'rgba(77,83,96,1)'
     }
  ];
  
  ngOnInit() {
   
    this.len = 0;
    this.show=true;
     let state=[];
     let no=[];
     this.map = [];    
    this.serv.getSellersCountByState().subscribe(
      inputdata => {
        this.map=inputdata.body;
        this.doughnutChartData = [];
        this.doughnutChartLabels = [];
        this.doughnutChartType = 'doughnut';
        this.show=false;       
        for(let i = 0;i < this.map.length; i = i +1){
          this.doughnutChartData.push(this.map[i].no);
          this.doughnutChartLabels.push(this.map[i].state);
        }
        console.log(this.doughnutChartData);
      }
      
    );
    
  }

}
