import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../../shared/entities/login';
import { LoginService } from '../../../shared/services/loginservice/login.service';
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';
import { User } from 'src/app/shared/entities/user';
import { LoaderService } from 'src/app/shared/services/loaderservice/loader.service';
import { AuthService,  FacebookLoginProvider,  GoogleLoginProvider, SocialUser} from 'angular5-social-login';
import { RegisterService } from 'src/app/shared/services/registerservice/register.service';
import { Register } from 'src/app/shared/entities/register';

@Component({
  selector: 'ngsm-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  userRegister: Register = new Register();
  loginForm: FormGroup;
  user: Login = new Login();
  url: string;
  hide: boolean = false;
  log_in: boolean = false;
  userData: User;
  userId: string;
  roleId:string;
  socialUser:SocialUser;
  logBoolean: boolean = false;
    regUser: boolean = false;
/*
 *   Formbuilder for getting values from form    
 */ 

  constructor(private fb: FormBuilder, private router: Router, public logserv: LoginService,
    public toastr: UsetoastrService, public load: LoaderService, private socialAuthService: AuthService,
    public regServ: RegisterService) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    })
  }
/*
 *     Triggering login after fetching details from form
 */
  onSubmit() {
    this.load.showProgBar();
    this.logBoolean = true;
    // console.log(this.loginForm.value);
    if (this.loginForm.get('email').value == null && this.loginForm.get('password').value == null)
      this.toastr.error("Please Enter Your Credentials");
    else if (this.loginForm.get('email').value == null)
      this.toastr.warning("Please enter valid email");
    else if (this.loginForm.get('password').value == null)
      this.toastr.warning("Please enter Password");
    /*
     * storing values to class from form
     */

    else {
      this.user.email = this.loginForm.value.email;
      this.user.password = this.loginForm.value.password;

      /*
       *   posting the user to the database to retrieve the details
       */

      this.logserv.postUser(this.user)
        .subscribe(
          data => {
            this.userData = data.body;
            this.logBoolean = false;
            if (this.userData != null) {
              this.userId = this.userData.usersId + '';
              this.roleId=this.userData.role.roleId+'';
              localStorage.setItem('login', this.user.email);
              localStorage.setItem('userid', this.userId);
              localStorage.setItem('roleid',this.roleId);
              console.log(this.roleId);
              /*
               * routing to home if role id is 1
               */
              if (this.userData.role.roleId == 1 ) {
                this.url = "/home";
              }
            /*
             * routing to home if role id is 2
             */
              else if (this.userData.role.roleId == 2) {
                this.url = "/sell";
              }
             /*
              * routing to home if role id is 3
              */
              else if (this.userData.role.roleId == 3) {
                
                this.url = "/admin";
              }
              //routing here using navigate
              this.router.navigateByUrl(this.url);
              this.toastr.success("You are logged in");
            }

            //No user 
            else {
              this.toastr.error("Invalid Email or Password");
              // this.toastr.warning("User Not Exist");
            }
            this.load.hideProgBar();
          },
          error => {
            console.log(error);
            this.load.hideProgBar();
          });
    }
  }
/**
 * logging in the user using facebook and google
 */

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID; 
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (socialUser) => {
        console.log(socialPlatform+" sign in data : " , socialUser);
        if(socialUser!=null){
          // let email=this.socialUser.email;
          let roleid='1';
          localStorage.setItem('login',socialUser.email);
          localStorage.setItem('roleid',  roleid );
          // localStorage.setItem('userid',socialUser.id);
          this.userRegister.userName=socialUser.name;
          this.userRegister.email=socialUser.email;
          this.userRegister.userId=socialUser.id
          this.userRegister.password="Google@123";
          this.userRegister.mobileNo=8989898989;
          this.userRegister.pincode=343432;
          this.regServ.postUser(this.userRegister).subscribe(
            socialData =>(socialData),
            error => {
              this.regUser = false;
              console.log(error)
            }
          );
         this.router.navigateByUrl('/login');
        }
      // console.log(socialUser.image);
      // this.image=userData.image;
      }
    );
  }

  ngOnInit() {

  }

}
