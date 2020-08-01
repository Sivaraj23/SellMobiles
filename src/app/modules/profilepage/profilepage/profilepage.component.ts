

//dev2.2

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileData } from "../../../shared/entities/profileData";
import { ProfileserviceService } from "../../../shared/services/profileservice/profileservice.service";
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';
import { LoginService } from '../../../shared/services/loginservice/login.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css'] 
})
export class ProfilepageComponent implements OnInit {
  id: number;
  public username: string;
  public hide1: boolean = false;
  public hide2: boolean = false;
  public hide3: boolean = false;
  public check: boolean = true;
  public cancelbool: boolean = false;
  public savebool: boolean = false;
  public cityval: boolean = false;
  public loader: boolean = true;
  public roleid: number;
  public passwordcheck: boolean = false;
  public message: string;
  actprofile: boolean = true;
  actreview: boolean = false;
  actorders: boolean = false;
  actsales: boolean = false;
  actorderdetails: boolean = false;
  actwishlist: boolean = false;

  public profileForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),

    street: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z0-9]+(?:[ :/,._-][A-Za-z0-9.]+)*$')]),
    city: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$')]),
    state: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$')]),
    pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[1-8]{1}[0-9]{5}")]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[6-9]{1}[0-9]{9}")]),
    usersId: new FormControl(),
    shopName: new FormControl('', Validators.pattern("^[A-Za-z]+(?:[ _-][A-Za-z0-9]+)*$")),
    shopId: new FormControl('')
  });
  profilePasswordForm = new FormGroup({
    oldpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*=+&]).{8,}')]),
    newpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*=+&]).{8,}')]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.maxLength(20), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*=+&]).{8,}')]),
  });
  constructor(public toastr: UsetoastrService, private userservice: ProfileserviceService,
    public profile: ProfileData, public logincheck: LoginService) {
    console.log('entered profile')

    // // //                                                               // // //
    // ************************ GET USER DATA BY USERID *************************//
    // // //                                                               // // //


    this.id = parseInt(localStorage.getItem('userid'));


    console.log(parseInt(<any>this.id));
    this.userservice.getById(this.id).subscribe(value => {
      console.log(value);
      this.profile = value.body;
      this.loader = false;
      this.username = this.profile.userName;
      // console.log('Password: '+this.profile.password);
      this.profileForm.get('name').setValue(this.profile.userName);
      this.profileForm.get('street').setValue(this.profile.street);
      this.profileForm.get('email').setValue(this.profile.email);
      this.profileForm.get('city').setValue(this.profile.city);
      this.profileForm.get('state').setValue(this.profile.state);
      this.profileForm.get('pin').setValue(this.profile.pincode);
      this.profileForm.get('phone').setValue(this.profile.mobileNo);
      this.profileForm.get('usersId').setValue(this.profile.usersId);
      this.toastr.success('Created on ' + this.profile.createdOn);
      this.toastr.success('Updated on ' + this.profile.updatedOn);
      this.profileForm.get('shopName').setValue(this.profile.shopName);

      this.roleid = this.profile.role.roleId;
      if (this.profile.role.roleId != 2) {
        this.check = false;

      }
    });
    console.log(this.profile.userName);




  }

  ngOnInit() {

  }
  submit() {

    this.savebool = true;
    this.profile.street = this.profileForm.controls.street.value;
    this.profile.city = this.profileForm.controls.city.value;
    this.profile.state = this.profileForm.controls.state.value;
    this.profile.pincode = this.profileForm.controls.pin.value;
    this.profile.mobileNo = this.profileForm.controls.phone.value;
    this.profile.shopName = this.profileForm.controls.shopName.value;


    var num = this.profileForm.controls.phone.value + '';


    this.profile.updatedOn = ' ';




    // // //                                                         // // //
    // ************************ Updating User Data ************************//
    // // //                                                         // // //

    this.userservice.postprofiledata(this.profile).subscribe(value => {
      this.message = value.body;
      this.toastr.success(this.message);
      this.savebool = false;
      console.log(value.body);
    }, error => {
      this.savebool = false;
      this.toastr.warning('failed');

    },
      () => {
        this.savebool = false;
        
      });


  }

  cancel() {
    this.cancelbool = true;
    this.profileForm.get('name').setValue(this.profile.userName);
    this.profileForm.get('street').setValue(this.profile.street);
    this.profileForm.get('email').setValue(this.profile.email);
    this.profileForm.get('city').setValue(this.profile.city);
    this.profileForm.get('state').setValue(this.profile.state);
    this.profileForm.get('pin').setValue(this.profile.pincode);
    this.profileForm.get('phone').setValue(this.profile.mobileNo);
    this.profileForm.get('usersId').setValue(this.profile.usersId);
    this.profileForm.get('shopName').setValue(this.profile.shopName);
    this.cancelbool = false;
  }


  submitpassword() {

    console.log('Enter submit password');

    this.savebool = true;
    if (this.profile.password == this.profilePasswordForm.get('oldpassword').value) {
      this.savebool = false;
      if ((this.profilePasswordForm.controls.newpassword.value == this.profilePasswordForm.controls.confirmpassword.value)) {
        this.savebool = false;
        if (this.profile.password == this.profilePasswordForm.controls.newpassword.value) {
          this.toastr.error('New password and Old password cannot be same');
          this.savebool = false;
        } else {
          this.profile.password = this.profilePasswordForm.get('newpassword').value;
          this.userservice.postprofiledata(this.profile).subscribe(value => {
            this.toastr.success('Password Details successfully updated')
            this.savebool = false;

          }, error => {
            this.toastr.success('Failed to update password')
            this.savebool = false;
          },
            () => {
              this.savebool = false;
              // console.log('completed');
            });
        }
      } else {

        this.toastr.error('New password and Confirm password should be same');
        this.savebool = false;
      }

    }
    else {
      this.toastr.error('Please enter correct password');
      this.savebool = false;
    }



  }


  // // //                                              // // //
  // ************************ SIDEBAR ************************//
  // // //                                              // // //

  reviews_css() {

    this.actreview = true;
    this.actorders = false;
    this.actsales = false;
    this.actorderdetails = false;
    this.actprofile = false;
    this.actwishlist = false;
  }
  sales_css() {
    this.actreview = false;
    this.actorders = false;
    this.actsales = true;
    this.actorderdetails = false;
    this.actprofile = false;
    this.actwishlist = false;
  }
  orders_css() {

    this.actreview = false;
    this.actorders = true;
    this.actsales = false;
    this.actorderdetails = false;
    this.actprofile = false;
    this.actwishlist = false;
  }
  orderdetails_css() {

    this.actreview = false;
    this.actorders = false;
    this.actsales = false;
    this.actorderdetails = true;
    this.actprofile = false;
    this.actwishlist = false;
  }
  wishlist_css() {
    this.actreview = false;
    this.actorders = false;
    this.actsales = false;
    this.actorderdetails = false;
    this.actprofile = false;
    this.actwishlist = true;
  }
}