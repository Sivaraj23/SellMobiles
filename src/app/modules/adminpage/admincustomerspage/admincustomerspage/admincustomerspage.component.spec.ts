import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincustomerspageComponent } from './admincustomerspage.component';
import { NgMaterialModule } from '../../../../core/designs/ngmaterial.module';
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';



describe('AdmincustomerspageComponent', () => {
  let component: AdmincustomerspageComponent;
  let fixture: ComponentFixture<AdmincustomerspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincustomerspageComponent ],
      imports:[NgMaterialModule,ChartsModule,HttpClientModule,ToastrModule.forRoot({
        preventDuplicates: true,
        positionClass: 'toast-bottom-right',
      }),]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincustomerspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
