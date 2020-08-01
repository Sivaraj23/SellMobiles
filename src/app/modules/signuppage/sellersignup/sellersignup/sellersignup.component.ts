import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../../../../shared/entities/register';
import { RegisterService } from '../../../../shared/services/registerservice/register.service';
import { Role } from '../../../../shared/entities/role';
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';

@Component({
  selector: 'app-sellersignup',
  templateUrl: './sellersignup.component.html',
  styleUrls: ['./sellersignup.component.css']
})

export class SellersignupComponent implements OnInit {
  sellerForm: FormGroup;
  url: string;
  seller: Register = new Register();
  hide: boolean = false;
  role: Role = new Role();
  roleName: string;
  roleDescription: string;
  regUser: boolean = false;
  count: number = 0;
  validateEmailval: string;
  existing: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, public regServ: RegisterService, public toastr: UsetoastrService) {

    this.sellerForm = fb.group({
      'name': [null, [Validators.required, Validators.pattern("^[A-Za-z]+(?:[ _-][A-Za-z]+)*$"), Validators.minLength(3)]],
      'shopName': [null, [Validators.required, Validators.minLength(5), Validators.pattern("^[A-Za-z]+(?:[ _-][A-Za-z]+)*$")]],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*=+&]).{8,}'), Validators.minLength(8), Validators.maxLength(20)]],
      'cPassword': [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*=+&]).{8,}'), Validators.minLength(8), Validators.maxLength(20)]],
      'mobileNo': [null, [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}'), Validators.minLength(10), Validators.maxLength(10)]],
      'street': [null, [Validators.required, Validators.pattern('^[A-Za-z0-9]+(?:[ :,_-][A-Za-z0-9.]+)*$')]],
      'city': [null, [Validators.required, Validators.pattern('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$')]],
      'state': [null, [Validators.required, Validators.pattern('^[A-Za-z]+(?:[ _-][A-Za-z]+)*$')]],
      'pincode': [null, [Validators.required, Validators.pattern('[1-8]{1}[0-9]{5}'), Validators.maxLength(6)]],
      'checkbox': ['', Validators.required]
    });

  }

  /*
   *     Triggering signup to get the form details and saving in the database
   */
  onSubmit() {

    this.regUser = true;
    this.seller.userName = this.sellerForm.value.name;
    this.seller.mobileNo = this.sellerForm.value.mobileNo;
    this.seller.shopName = this.sellerForm.value.shopName;
    this.seller.email = this.sellerForm.value.email;
    this.seller.password = this.sellerForm.value.password;
    this.seller.cPassword = this.sellerForm.value.cPassword;
    this.seller.street = this.sellerForm.value.street;
    this.seller.city = this.sellerForm.value.city;
    this.seller.state = this.sellerForm.value.state;
    this.seller.pincode = this.sellerForm.value.pincode;
    this.roleName = "seller";
    this.role.roleName = this.roleName;
    this.roleDescription = "seller";
    this.role.description = this.roleDescription;

    /*
     * verifying the email whether it is existing already in database  
     */ 

   if(this.existing==false){
    if (this.sellerForm.get('name').value != null && this.sellerForm.get('password').value != null && this.sellerForm.get('mobileNo').value != null && this.sellerForm.get('email').value != null &&
      this.sellerForm.get('cPassword').value != null && this.sellerForm.get('shopName').value != null && this.sellerForm.get('street').value != null &&
      this.sellerForm.get('state').value != null && this.sellerForm.get('city').value != null && this.sellerForm.get('pincode').value != null) {
      if (this.sellerForm.get('password').value != this.sellerForm.get('cPassword').value) {
        this.toastr.warning("Please Check your Passwords");
      }
      else {

        this.regServ.postSeller(this.seller).subscribe(data => (data), error => console.log(error));
        this.regUser = false;
        this.toastr.success("Thank you Registering as seller " + this.seller.userName);
        this.toastr.success("Redirecting to Login");
        this.url = "/login";
        this.router.navigateByUrl(this.url);
      }
    }
    else {
      this.toastr.warning("Please Fill all details");
    }
  }
  else{
    this.toastr.error("enter a different email...")
  }
  }
   /*
    * Email verification whether the mail is already registered
    */
  validateEmail() {
    this.count = this.count + 1;
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    this.validateEmailval = this.sellerForm.value.email;
    this.seller.email = this.validateEmailval;

    if (this.count > 4) {

      if (regex.test(this.validateEmailval)) {

        this.regServ.validateEmail(this.seller).subscribe(data => {
          this.existing = data.body;
          console.log(this.existing);
        });

      }
    }

  }

  ngOnInit() {
  }

}
