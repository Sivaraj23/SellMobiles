import { TestBed } from '@angular/core/testing';

import { UsetoastrService } from './usetoastr.service';
import { ToastrModule } from "ngx-toastr";

describe('UsetoastrService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ToastrModule.forRoot({
      preventDuplicates: true,
      positionClass: 'toast-bottom-right',
    })]
  }));

  it('should be created', () => {
    const service: UsetoastrService = TestBed.get(UsetoastrService);
    expect(service).toBeTruthy();
  });
});
