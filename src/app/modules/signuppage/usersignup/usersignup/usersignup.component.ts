import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from '../../../../shared/entities/register';
import { Router } from '@angular/router';
import { RegisterService } from '../../../../shared/services/registerservice/register.service';
import { Role } from '../../role';
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  user: Register = new Register();
  userForm: FormGroup;
  url: string;
  hide: boolean = false;
  role: Role = new Role();
  roleName: string;
  roleDescription: string;
  bool: boolean;
  validateEmailval: string;
  regUser: boolean = false;
  existing: boolean = false;
  count: number = 0;

  constructor(private fb: FormBuilder, private router: Router, public regServ: RegisterService, public toastr: UsetoastrService) {
    this.userForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$'), Validators.minLength(3)]],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*=+&]).{8,}'), Validators.minLength(8)]],
      'cPassword': [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*=+&]).{8,}'), Validators.minLength(8)]],
      'mobileNo': [null, [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}'), Validators.minLength(10), Validators.maxLength(10)]],
      'street': [null, [Validators.required, Validators.pattern('^[A-Za-z0-9]+(?:[ :,_-][A-Za-z0-9.]+)*$')]],
      'city': [null, [Validators.required, Validators.pattern('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$')]],
      'state': [null, [Validators.required, Validators.pattern('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$')]],
      'pincode': [null, [Validators.required, Validators.pattern('[1-8]{1}[0-9]{5}'), Validators.maxLength(6)]],
      'checkbox': ['', Validators.required],
      'roleName': ['buyer'],
      'roleDescription': ['buyer'],
    })
  }

  onSubmit() {
    this.regUser = true;
    //console.log(this.userForm.value);
    this.user.userName = this.userForm.value.name;
    this.user.mobileNo = this.userForm.value.mobileNo;
    this.user.shopName = null;
    this.user.email = this.userForm.value.email;
    this.user.password = this.userForm.value.password;
    this.user.cPassword = this.userForm.value.cPassword;
    this.user.street = this.userForm.value.street;
    this.user.city = this.userForm.value.city;
    this.user.state = this.userForm.value.state;
    this.user.pincode = this.userForm.value.pincode;

    //  this.toastr.success("Thank you for registering "+this.user.userName);

    //------------------------------Validating Input Fields---------------------------//

  if(this.existing==false){
    if (this.userForm.get('name').value != null && this.userForm.get('password').value != null && this.userForm.get('mobileNo').value != null && this.userForm.get('email').value != null &&
      this.userForm.get('cPassword').value != null && this.userForm.get('street').value != null &&
      this.userForm.get('state').value != null && this.userForm.get('city').value != null && this.userForm.get('pincode').value != null) {

      if (this.userForm.get('password').value != this.userForm.get('cPassword').value) {
        // alert("password mismatch");
        this.toastr.warning("Please Verify your passwords")
      }

      else {
        //Storing the data
        this.regServ.postUser(this.user).subscribe(data => (data),
          error => {
            this.regUser = false;
            console.log(error)
          });


        // alert("Thank you For Registering With us, Please login to continue");
        this.toastr.success("Thank you for Registering " + this.user.userName);
        this.toastr.success("Redirecting to Login");
        this.url = "/login";
        this.router.navigateByUrl(this.url);
      }
    }
    else {
      // alert("Enter the details");
      this.toastr.error("Please Fill the Details to continue");
    }
  }
  else{
  this.toastr.error("Please enter a different email");
    }
  }
  /**
   * Verifying for duplicate emails 
   */
  validateEmail() {
    this.count = this.count + 1;
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    this.validateEmailval = this.userForm.value.email;
    this.user.email = this.validateEmailval;

    if (this.count > 4) {

      if (regex.test(this.validateEmailval)) {

        this.regServ.validateEmail(this.user).subscribe(data => {

          this.existing = data.body;
          console.log(this.existing);

        });

      }
    }

  }

  ngOnInit() {
  }
}
