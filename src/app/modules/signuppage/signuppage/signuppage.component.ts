import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor(private toastr:ToastrService, private router:Router) { }
/**
 *  Approval for seller by admin
 */
  role:string='2';
  confirmSeller():void{
    this.toastr.success('Your request has been placed! We will get in touch soon');
    // this.router.navigateByUrl('/home');
    localStorage.setItem('roleid',this.role);
    this.router.navigateByUrl('sell');
  }

  ngOnInit() {


  }

}

