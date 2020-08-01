import { TestBed } from '@angular/core/testing';





import { AdmindashboardService } from './admindashboard.service';
import { HttpClientModule } from "@angular/common/http";

describe('AdmindashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({  imports:[ HttpClientModule] }));

  it('should be created', () => {
    const service: AdmindashboardService = TestBed.get(AdmindashboardService);
    expect(service).toBeTruthy();
  });
});
