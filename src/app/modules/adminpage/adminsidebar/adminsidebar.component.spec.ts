import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsidebarComponent } from './adminsidebar.component';
import { ChartsModule } from "ng2-charts";
import { HttpClient } from "selenium-webdriver/http";
import { HttpHandler, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe('AdminsidebarComponent', () => {
  let component: AdminsidebarComponent;
  let fixture: ComponentFixture<AdminsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsidebarComponent
      ],
      imports:[ChartsModule,HttpClientModule],
      providers:[HttpHandler],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
