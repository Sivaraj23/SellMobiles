import { CartService } from './../../shared/services/cart-service/cart.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/loginservice/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loaderservice/loader.service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angular5-social-login';
import { SearchService } from "src/app/shared/services/search/search.service";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Product } from "src/app/shared/entities/product";
@Component({
  selector: 'ngsm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  form = new FormGroup({
    searchbar: new FormControl('', Validators.required)
  })

  cartItemCount: number; // think it is coming from single product page
  name: string;
  currentUserId: any;
  _subscription: Subscription;
  items: any[] = [];w
  log: boolean = false;
  userData: SocialUser;
  products: Product[] = [];


  constructor(public logincheck: LoginService, public toastr: ToastrService,
    private router: Router, private cartService: CartService, private loader: LoaderService, public socialAuthService: AuthService, private searchService: SearchService) {
      
    toastr.success("welcome");

    // //Look item count after adding one element
    // this.itemCount = this.cartService.count;
    // this._subscription = this.cartService.changeTotalCartItemsCount
    //       .subscribe(data=>{
    //         console.log("Change in cart itemcount:" + data);
    //         this.itemCount = data;
    //       });

    
    

    //Observe for change in cart items
    this._subscription = this.cartService.changeCartItems
      .subscribe(data => {
        // console.log("changing badge value during adding or removing");
        this.items = data as any[];
        this.cartItemCount = this.items.length;
      });

    // //Observe for change in Price
    // this.totalPrice = this.cartService.totalCartPrice;
    // this._subscription = this.cartService.changeTotalCartPrice.subscribe(data=>{
    //   this.totalPrice = data;
    // });
  }

  ngOnInit() {
    this.products=[];
    this.name = localStorage.getItem('login');
    this.currentUserId = localStorage.getItem('userid');
    this.items = this.cartService.cartItems;
   
    //Observe for change in cart items
    this._subscription = this.cartService.changeCartItems
      .subscribe(data => {
        console.log("changing badge value during removing");
        this.items = data as any[];
        this.cartItemCount = this.items.length;
      });

    this.getcartItems();
  }
  logout(socialPlatform: string) {
    this.cartItemCount = 0; //make badge to zero
    let socialPlatformProvider;
    

    var check = confirm("Do you want to logout");
    if (check == true) {
      if (socialPlatform == "google") {
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      this.socialAuthService.signOut();
      // this.socialAuthService.signOut().then(
      //   (userData) => {
      //     this.name=userData;
      //     this.name=userData.name;
      //     localStorage.removeItem('login');
      //     console.log(" sign Out : " , userData);
      //   //   if(userData!=null)
      //   //    this.router.navigateByUrl('/home');
      //   // console.log(userData.image);
      //   // // this.image=userData.image;
      //   }
      // );
      localStorage.removeItem('login');
      localStorage.removeItem('userid');
      localStorage.removeItem('roleid');
      this.router.navigateByUrl("/home");
      this.toastr.success("Logged Out Successfully");
    }
  }

  // socialSignOut(socialPlatform : string) {
  //   let socialPlatformProvider;
  //   if(socialPlatform == "facebook"){
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   }else if(socialPlatform == "google"){
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }

  //   this.socialAuthService.signOut().then(
  //     (userData) => {
  //       console.log(socialPlatform+" sign Out : " , userData);
  //     //   if(userData!=null)
  //     //    this.router.navigateByUrl('/home');
  //     // console.log(userData.image);
  //     // // this.image=userData.image;
  //     }
  //   );
  // }
  productList(){
    this.router.navigateByUrl('/products');
    this.searchService.setSearchKey(null);
    // this.router.navigateByUrl('/products');
    this.searchService.getVal();
  }

  search() {
    console.log(this.form.value);
  
    if(this.form.value.searchbar=="")
      {
        alert('no search keyword provided');
      }
      else{
      this.searchService.setSearchKey(this.form.value.searchbar);
      this.router.navigateByUrl('/products');
      this.searchService.getVal();
      }
  }


  getcartItems() {
    this.cartService.getFromCart().subscribe(data => {
      console.log("First time getting cart from header");
      this.items = data.body as any[];
      this.cartItemCount = this.items.length;
    });
  }
  /**
   * routing to seller page on checking role id
   */
  sellCheck():void{
    if(localStorage.getItem('login')==null){
      alert("Please Login to continue");  

    }
    else{
      if(localStorage.getItem('roleid')=='2'){
        this.router.navigateByUrl("sell");
      }
      else if(localStorage.getItem('roleid')=='1'){
        this.toastr.error("You are not registered as seller. Please contact Admin to get access");
        // alert("Do you want to continue as seller? Please contact admin.!");
        this.router.navigateByUrl("sellerapproval");
      }
    }
  }
/**
 * logging in after succesful fetching of credentials.
 */
  login(): void {
    this.log = true;
    this.router.navigateByUrl("/login");
    this.log = false;
  }
}
