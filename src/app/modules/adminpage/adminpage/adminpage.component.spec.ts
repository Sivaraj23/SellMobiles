import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpageComponent } from './adminpage.component';
import { AdminpageModule } from "src/app/modules/adminpage/adminpage.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

describe('AdminpageComponent', () => {
  let component: AdminpageComponent;
  let fixture: ComponentFixture<AdminpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports:[AdminpageModule,
      HttpClientModule,RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
