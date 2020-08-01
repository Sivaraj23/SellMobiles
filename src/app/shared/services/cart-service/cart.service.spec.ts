import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { UsetoastrService } from "src/app/shared/services/toastrservice/usetoastr.service";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[ HttpClientModule,ToastrModule.forRoot({
    preventDuplicates: true,
    positionClass: 'toast-bottom-right',
  })] ,providers:[UsetoastrService]}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
});
