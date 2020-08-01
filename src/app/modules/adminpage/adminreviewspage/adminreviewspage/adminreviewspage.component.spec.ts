import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreviewspageComponent } from './adminreviewspage.component';
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { HttpClientModule } from '@angular/common/http';



describe('AdminreviewspageComponent', () => {
  let component: AdminreviewspageComponent;
  let fixture: ComponentFixture<AdminreviewspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminreviewspageComponent ],
      imports:[NgMaterialModule,HttpClientModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreviewspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
