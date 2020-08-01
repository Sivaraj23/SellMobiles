import { TestBed } from '@angular/core/testing';

import { SelldashboardService } from './selldashboard.service';
import { HttpClientModule } from "@angular/common/http";

describe('SelldashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: SelldashboardService = TestBed.get(SelldashboardService);
    expect(service).toBeTruthy();
  });
});
