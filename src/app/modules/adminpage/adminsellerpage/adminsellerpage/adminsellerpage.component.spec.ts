import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsellerpageComponent } from './adminsellerpage.component';
import { ChartsModule } from "ng2-charts";

import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { HttpClientModule } from "@angular/common/http";


describe('AdminsellerpageComponent', () => {
  let component: AdminsellerpageComponent;
  let fixture: ComponentFixture<AdminsellerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsellerpageComponent ],
      imports:[
        ChartsModule,
        NgMaterialModule,
        HttpClientModule
      ]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsellerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
