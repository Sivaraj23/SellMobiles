import { TestBed } from '@angular/core/testing';

import { ProfileserviceService } from './profileservice.service';
import { HttpClientModule } from "@angular/common/http";

describe('ProfileserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ProfileserviceService = TestBed.get(ProfileserviceService);
    expect(service).toBeTruthy();
  });
});
