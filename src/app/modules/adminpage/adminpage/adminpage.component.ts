import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../shared/services/loginservice/login.service';



@Component({
  selector: 'ngsm-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
 
  constructor(public logincheck:LoginService) { }
 
  ngOnInit() {
  }

}
