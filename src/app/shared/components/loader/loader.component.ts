import { Component, OnInit } from '@angular/core';
import { LoaderService } from "../../services/loaderservice/loader.service";
import { ToastrService } from "ngx-toastr";
import { Subscription } from "rxjs";
@Component({
  selector: 'ngsm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  bool=false;

  subscription:Subscription;
  

  constructor(private togProgBar : LoaderService,private toastr : ToastrService) {
    
        // subscribe to val from header page
        this.subscription=togProgBar.getVal().subscribe(
          data=>{
          this.bool=data.boolean;
        }
        );
    
       }

  ngOnInit() {
  }

}
