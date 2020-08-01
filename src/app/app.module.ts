import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './core/designs/ngmaterial.module';
import { HeaderComponent } from './core/header/header.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from "ng2-charts";
import { StateDropdownComponent } from './shared/components/state-dropdown/state-dropdown.component';
import { FooterComponent } from "src/app/core/footer/footer.component";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';
import { SearchService } from "src/app/shared/services/search/search.service";
import { ProductpageModule } from "src/app/modules/productpage/productpage.module";



export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          
          // qa
          // provider: new FacebookLoginProvider("2083329985297971")

          // dev
          provider: new FacebookLoginProvider("2124853767827543")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          // provider: new GoogleLoginProvider("637302772666-9tsptcurv6j408id0f789krr1s6vp7sj.apps.googleusercontent.com")
          provider: new GoogleLoginProvider("404719033109-8igcjhf1ghbpc95t55i0f1fi336qjbi0.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    // StateDropdownComponent,
    // LoaderComponent,
    
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
   ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-bottom-right',
    }) ,
    NgMaterialModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule,
    ChartsModule,
    ProductpageModule
    
  ],exports:[
    // LoaderComponent
  ],
  providers: [
  
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
