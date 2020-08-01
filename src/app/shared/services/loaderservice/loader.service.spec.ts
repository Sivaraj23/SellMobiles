import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { ToastrModule } from "ngx-toastr";

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[ToastrModule.forRoot({
    preventDuplicates: true,
    positionClass: 'toast-bottom-right',
  })]}));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });
});
