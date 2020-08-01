import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../../shared/entities/product';
import { Brand } from '../../../shared/entities/brand';
import { ProductService } from '../../../shared/services/product/product.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse, HttpEventType } from '@angular/common/http';
import { UsetoastrService } from 'src/app/shared/services/toastrservice/usetoastr.service';
import { ProductDto } from "src/app/shared/entities/productDto";
import { Router } from "@angular/router";
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  maxDate = new Date();
  buttonDisabled = false;
  formDisabled = true;
  loginDisabled=true;
  /******VALIDATIONS***** */
  addProductForm = new FormGroup({
    brandName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[A-Za-z]+(?:[][A-Za-z]+)*$'), // <-- Allow letters and numbers only
    ])),
    brandDescription: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[A-Za-z]+(?:[. ][A-Za-z .]+)*$'), // <-- Allow letters and numbers only
    ])),
    productName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[A-Za-z0-9]+(?:[ ._-][A-Za-z0-9.]+)*$'), // <-- Allow letters and numbers only
    ])),
    screenSize: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]+(?:[.][0-9.A-Za-z]+)*$'),
      Validators.maxLength(3) // <-- Allow letters and numbers only
    ])),
    battery: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]+(?:[A-Za-z0-9]+)*$'), // <-- Allow letters and numbers only
    ])),
    camera: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]+(?:[A-Za-z+0-9]+)*$'), // <-- Allow letters and numbers only
    ])),
    operatingSystem: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[A-Za-z]+(?:[A-Za-z0-9 .][A-Za-z0-9]+)*$'), // <-- Allow letters and numbers only
    ])),
    speed: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]+(?:[A-Za-z0-9.][0-9A-Za-z]+)*$'),
     // <-- Allow letters and numbers only
    ])),
    
    defects: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[A-Za-z]+(?:[ .][A-Za-z. ]+)*$'), // <-- Allow letters and numbers only
    ])),
    description: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[A-Za-z]+(?:[ .][A-Za-z.]+)*$'), // <-- Allow letters and numbers only
    ])),
    price: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]+(?:[][0-9]+)*$'), // <-- Allow letters and numbers only
    ])),
    purchaseDate: new FormControl(''),

  });

  constructor(private productService: ProductService, private httpService: HttpClient
    , public toastr: UsetoastrService, private router:Router ) {

    if(localStorage.getItem('login') && localStorage.getItem('userid')){
      this.loginDisabled= false;
      console.log(this.loginDisabled);
    }

   }



  num = 0;
  userId: number;
  files: FileList;
  currentFileUpload: File;
  products = [];
  urls = new Array<string>();
  myFiles: string[] = [];
  product: Product = new Product();
  brand: Brand = new Brand();
  productDto: ProductDto = new ProductDto();



  ngOnInit() { 
    console.log(this.urls);
  }



  //DEFAULT IMAGE PATH
  url1 = '../../../../assets/others/default.png';
  url2 = '';
  url3 = '../../../../assets/phones/dummy.jpg';

  //SELECT IMAGE 
  onSelectFile(event) {
    console.log(event);
    this.files = event.target.files;
    this.url1 = '';
    this.urls = [];
    console.log(event);
    if (event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.') + 1) == "jpg" || event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.') + 1) == "jpeg" || event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.') + 1) == "png" ||
      event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.') + 1) == "JPG" || event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.') + 1) == "JPEG" || event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.') + 1) == "PNG") {
      if (event.target.files && event.target.files[0]) {
        {
          let reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (e: any) => {
            this.url1 = e.target.result;
            this.url2 = e.target.result;
            this.urls.push(this.url2);
          }
        }

        this.num = this.num + 1;

      }
      ;
      this.buttonDisabled = false;
      this.formDisabled = this.addProductForm.invalid || this.buttonDisabled;

    }
    else {
      this.toastr.error("upload correct file");
      this.buttonDisabled = true;
      this.formDisabled = this.addProductForm.invalid || this.buttonDisabled;

    }


  }

  /******************************************************** */
  //On click of submit,store values in product.
  /******************************************************** */

  submit() {
    this.productDto.brandName = this.addProductForm.controls.brandName.value;
    this.productDto.brandDescription = this.addProductForm.controls.brandDescription.value;
    this.productDto.productName = this.addProductForm.controls.productName.value;
    this.productDto.screenSize = this.addProductForm.controls.screenSize.value;
    this.productDto.battery = this.addProductForm.controls.battery.value;
    this.productDto.camera = this.addProductForm.controls.camera.value;
    this.productDto.operatingSystem = this.addProductForm.controls.operatingSystem.value;
    this.productDto.memorySpeed = this.addProductForm.controls.speed.value;
    this.productDto.defects = this.addProductForm.controls.defects.value;
    this.productDto.description = this.addProductForm.controls.description.value;
    this.productDto.price = this.addProductForm.controls.price.value;

    /******************************************************** */
    //Send details to add image and data in database
    /******************************************************** */
console.log('urls---------'+this.urls);

    if (this.urls.length == 0) {
    //  this.currentFileUpload=this.url3;
      this.productService.addProduct(this.productDto).subscribe(
        value => {

          console.log('[POST] added product successfully', value.body);
        }, error => {
          console.log('FAIL to add product!');
        },
        () => {
          console.log('POST Product - now completed.');
          this.toastr.success("Your product is added successfully!!!!!!!!");
          this.router.navigateByUrl('/home');
        });
    }
    else {
      this.currentFileUpload = this.files.item(0);

      this.productService.addImage(this.currentFileUpload).subscribe(event => {
        if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');

          this.productService.addProduct(this.productDto).subscribe(
            value => {
              console.log(value);
              console.log('[POST] added product successfully', value.body);
            }, error => {
              console.log('FAIL to add product!');
            },
            () => {
              console.log('POST Product - now completed.');
              this.toastr.success("Your product is added successfully!!!!!!!!");
              this.router.navigateByUrl('/home');
            });
        }

      });

      this.files = undefined;
    }


  }

}
