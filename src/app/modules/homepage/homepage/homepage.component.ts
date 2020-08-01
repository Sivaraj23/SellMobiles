import { Component, OnInit } from '@angular/core';
import { LoaderService } from "src/app/shared/services/loaderservice/loader.service";

@Component({
  selector: 'ngsm-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private load:LoaderService) {
    
       }
    
      ngOnInit() {
       // this.load.hideProgBar();
        //this.load.showProgBar();
      }

      // loader(){
      //   this.load.showProgBar();
      // }
    
}
