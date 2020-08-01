import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HeaderComponent } from "src/app/core/header/header.component";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { LoaderComponent } from "src/app/shared/components/loader/loader.component";
import { HttpClientModule } from "@angular/common/http";

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations:[HeaderComponent,LoaderComponent ],
    imports:[NgMaterialModule,HttpClientModule],providers:[LoginService]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
