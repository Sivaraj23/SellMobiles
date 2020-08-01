import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashboardpageComponent } from './admindashboardpage.component';
import { ToastrModule } from "ngx-toastr";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);


describe('AdmindashboardpageComponent', () => {
  let component: AdmindashboardpageComponent;
  let fixture: ComponentFixture<AdmindashboardpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindashboardpageComponent ],
      imports:[    ToastrModule.forRoot() ,
        NgMaterialModule,ChartsModule,HttpClientModule],
        providers:[ { provide: Router,
          useValue: routerSpy
         }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindashboardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
